const Discord = require("discord.js");
const Prompt = require("./prompt");

class CommandPrompt extends Prompt {

    async registerCallbacks() {
        super.registerCallbacks();

        this.command = await this.guild.commands.create(this.info.options);
        console.log("id", this.command.id);

        this.client.on("interactionCreate", this.onInteractionCreate.bind(this));
    }

    async unregisterCallbacks() {
        await super.unregisterCallbacks();

        await this.command.delete();

        this.client.off("interactionCreate", this.onInteractionCreate);
    }

    /**
     * @param {Discord.CommandInteraction} interaction 
     */
    async onInteractionCreate(interaction) {
        if (!interaction.isCommand()) return;
        if (interaction.commandId !== this.command.id) return;
        
        await this.unregisterCallbacks();
        
        await this.onSuccess(interaction);
    }
}

module.exports = CommandPrompt;