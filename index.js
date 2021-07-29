const core = require('@actions/core');
const { Client, Intents } = require("discord.js");
const Prompts = require("./prompts");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prompts = JSON.parse(core.getInput("PROMPTS", { required: true }));
let currentPromptIndex = 0;

async function nextPrompt() {
    let prompt = Prompts.fromInfo(client, prompts[currentPromptIndex++]);

    console.log("Handling prompt", prompt);
    await prompt.registerCallbacks();
    await prompt.sendMessage();
    await prompt.waitFinished();

    if (currentPromptIndex < prompts.length) {
        console.log("Continuing with next prompt");

        await nextPrompt();
    } else {
        console.log("Handled all prompts, exiting...");

        client.destroy();
    }
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    nextPrompt();
});

client.login(core.getInput("DISCORD_TOKEN", { required: true }));
