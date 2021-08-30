const Discord = require("discord.js");
const Prompt = require("./prompt");

class CommandPrompt extends Prompt {

    async registerCallbacks() {
        super.registerCallbacks();

        this.command = await this.guild.commands.create(this.info.options);
        console.log(`Registered guild command with id=${this.command.id}`);

        this.client.on("interactionCreate", this.onInteractionCreate.bind(this));
    }

    async unregisterCallbacks() {
        await super.unregisterCallbacks();

        await this.command.delete();
        console.log("Deleted guild command")

        this.client.off("interactionCreate", this.onInteractionCreate);
    }

    /**
     * @param {Discord.CommandInteraction} interaction 
     */
    async onInteractionCreate(interaction) {
        if (!interaction.isCommand()) return;
        if (interaction.commandId !== this.command.id) return;
        
        console.log(interaction);
        
        await this.unregisterCallbacks();

        if (this.info.maskOptions === undefined || this.info.maskOptions === true) {
            console.log("Masking option values from the GitHub Actions log. Set <prompt>.maskOptions to false to disable this.");
        } else {
            console.log("Leaving option values in the GitHub Actions log. Set <prompt>.maskOptions to true to enable this.");
        }

        let options = {}
        for (let option of interaction.options._hoistedOptions) {
            options[option.name] = option.value;

            if (this.info.maskOptions === undefined || this.info.maskOptions === true) {
                console.log(`::add-mask::${option.value}`);
            }
        }

        this.setOutput({
            raw: interaction.options,
            options: options
        });
        
        await this.onSuccess(interaction);
    }
}

module.exports = CommandPrompt;