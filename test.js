

(async ()=>{
    process.env.INPUT_DISCORD_TOKEN = process.env.DISCORD_TOKEN;
    process.env.INPUT_DISCORD_GUILD = process.env.DISCORD_GUILD;
    process.env.INPUT_DISCORD_CHANNEL = process.env.DISCORD_CHANNEL;
    process.env.INPUT_PROMPTS = `[
        {
            "name": "code_2fa_command",
            "message": {
                "content": null,
                "embeds": [{
                    "title": "Please enter your two factor authentication code",
                    "description": "/2fa <code>",
                    "color": 5793266
                }]
            },
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
            },
            "onSuccess": {
                "content": null,
                "embeds": [{
                    "title": "Entered 2FA code",
                    "color": 5763719
                }]
            }
        },
        {
            "name": "code_2fa_keypad",
            "message": {
                "content": null,
                "embeds": [{
                    "title": "Please enter your two factor authentication code",
                    "description": "/2fa <code>",
                    "color": 5793266
                }]
            },
            "type": "NUMPAD",
            "options": {
                "length": 6
            },
            "onSuccess": {
                "content": null,
                "embeds": [{
                    "title": "Entered 2FA code",
                    "color": 5763719
                }]
            }
        }
    ]`;

    require(".");
})();