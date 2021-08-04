//TODO: finish ./commands/reactionrole.js

//Lists constants and other things (:
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs');
const coolbabyrobert = client.emojis.cache.get("824487161591889940");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.DISCORD_TOKEN);
