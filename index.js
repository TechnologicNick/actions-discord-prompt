const core = require('@actions/core');
const Discord = require("discord.js");
const Prompt = require("./prompt");

const client = new Discord.Client();

const prompts = JSON.parse(core.getInput("PROMPTS", { required: true }));
let currentPromptIndex = 0;

function nextPrompt() {
    let prompt = Prompt.fromObject(prompts[currentPromptIndex++]);

    console.log("Handling prompt", prompt);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    nextPrompt();
});

client.login(core.getInput("DISCORD_TOKEN", { required: true }));
