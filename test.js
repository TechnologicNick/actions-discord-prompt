

(async ()=>{
    process.env.INPUT_DISCORD_TOKEN = process.env.DISCORD_TOKEN;
    process.env.INPUT_DISCORD_GUILD = process.env.DISCORD_GUILD;
    process.env.INPUT_DISCORD_CHANNEL = process.env.DISCORD_CHANNEL;
    process.env.INPUT_PROMPTS = `[
        {
            "name": "code_2fa_command",
            "title": "Please enter your two factor authentication code",
            "description": "desc",
            "color": 0,
            "type": "COMMAND",
            "options": {
                "name": "2fa",
                "description": "Please enter your two factor authentication code",
                "options": [{
                    "name": "code",
                    "type": "INTEGER",
                    "description": "The Steam Guard code",
                    "required": true
                }]
            }
        },
        {
            "name": "code_2fa_keypad",
            "title": "Please enter your two factor authentication code",
            "description": "desc",
            "color": 0,
            "type": "NUMPAD",
            "options": {
                "length": 6
            }
        }
    ]`;

    require(".");
})();