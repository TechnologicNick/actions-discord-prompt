

(async ()=>{
    process.env.INPUT_DISCORD_TOKEN = process.env.DISCORD_TOKEN;
    process.env.INPUT_DISCORD_GUILD = process.env.DISCORD_GUILD;
    process.env.INPUT_DISCORD_CHANNEL = process.env.DISCORD_CHANNEL;
    process.env.INPUT_PROMPTS = `[
        {
            "name": "code_2fa",
            "title": "Please enter your two factor authentication code",
            "description": "desc",
            "color": 0,
            "type": "numpad",
            "length": 6
        }
    ]`;

    require(".");
})();