const Prompt = require("./prompt");

class CommandPrompt extends Prompt {

    async registerCallbacks(client) {
        super.registerCallbacks(client);

        const command = await this.guild.commands.create({
            name: "enter",
            description: "Enter a value for a prompt"
        });
        console.log(command);
    }
}

module.exports = CommandPrompt;