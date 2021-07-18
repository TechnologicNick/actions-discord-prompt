const core = require("@actions/core");
const Prompt = require("./prompts/prompt");
const CommandPrompt = require("./prompts/command");
const KeypadPrompt = require("./prompts/keypad");

class Prompts {

    static fromObject(client, obj) {
        let promptConstructor = Prompt

        switch (obj.type?.toUpperCase()) {
            case "COMMAND":
                promptConstructor = CommandPrompt;
                break;
            case "KEYPAD":
                promptConstructor = KeypadPrompt;
                break;
            default:
                console.warn("Unknown prompt type:", obj.type);
                break;
        }

        const guild = client.guilds.cache.get(core.getInput("DISCORD_GUILD"));
        const channel = guild.channels.cache.get(core.getInput("DISCORD_CHANNEL"));

        return Object.assign(new promptConstructor(guild, channel), obj);
    }

}

module.exports = Prompts;