class Prompt {

    constructor(guild, channel) {
        this.guild = guild;
        this.channel = channel;
    }

    async registerCallbacks(client) {
        this.client = client;
    }
}

module.exports = Prompt;