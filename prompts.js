const core = require("@actions/core");
const Prompt = require("./prompts/prompt");
const CommandPrompt = require("./prompts/command");

class Prompts {

    static fromInfo(client, info) {
        let promptConstructor = Prompt

        switch (info.type?.toUpperCase()) {
            case "COMMAND":
                promptConstructor = CommandPrompt;
                break;
            default:
                console.warn("Unknown prompt type:", info.type);
                break;
        }

        const guild = client.guilds.cache.get(core.getInput("DISCORD_GUILD"));
        const channel = guild.channels.cache.get(core.getInput("DISCORD_CHANNEL"));

        return new promptConstructor(client, guild, channel, info);
    }

}

module.exports = Prompts;