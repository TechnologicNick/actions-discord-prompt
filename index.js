const core = require('@actions/core');
const { Client, Intents } = require("discord.js");
const Prompts = require("./prompts");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prompts = JSON.parse(core.getInput("PROMPTS", { required: true }));
let currentPromptIndex = 0;

function nextPrompt() {
    let prompt = Prompts.fromObject(client, prompts[currentPromptIndex++]);

    console.log("Handling prompt", prompt);
    prompt.registerCallbacks(client);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    nextPrompt();
});

client.login(core.getInput("DISCORD_TOKEN", { required: true }));
