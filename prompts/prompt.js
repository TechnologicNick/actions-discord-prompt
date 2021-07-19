const Discord = require("discord.js");

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
    }
}

module.exports = Prompt;