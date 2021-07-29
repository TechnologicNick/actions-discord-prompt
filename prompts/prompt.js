const Discord = require("discord.js");
const core = require("@actions/core");

class Prompt {

    /**
     * 
     * @param {Discord.Client} client 
     * @param {Discord.Guild} guild 
     * @param {Discord.TextChannel} channel 
     */
    constructor(client, guild, channel, info) {
        this.client = client;
        this.guild = guild;
        this.channel = channel;
        this.info = info;

        this.name = this.info.name;

        this.finished = false;
    }

    async registerCallbacks() {
        
    }

    async unregisterCallbacks() {

    }

    createMessage(msgData) {
        return msgData;
    }

    async sendMessage() {
        this.channel.send(this.createMessage(this.info.message));
    }

    /**
     * @param {Discord.CommandInteraction} interaction 
     */
    async onSuccess(interaction) {
        if (this.info.onSuccess) {
            await interaction.reply(this.createMessage(this.info.onSuccess));
        } else {
            await interaction.reply({
                embeds: [ new Discord.MessageEmbed({
                    title: "Prompt entered",
                    color: 5763719
                }) ],
                ephemeral: false
            });
        }

        this.finished = true;
        this.waitFinishedResolve?.call(this.output);
    }

    setOutput(output) {
        this.output = output;
        core.setOutput(this.name, output);
        console.log(`Set output for ${this.name} to`, output);
    }

    waitFinished() {
        return new Promise((resolve, reject) => {
            if (this.finished) {
                resolve(this.output);
            }

            this.waitFinishedResolve = resolve;
            this.waitFinishedReject = reject;
        })
    }
}

module.exports = Prompt;