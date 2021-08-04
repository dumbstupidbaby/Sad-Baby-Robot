//Lists constants and other things (:
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'C:'
const fs = require('fs');
const coolbabyrobert = client.emojis.cache.get("824487161591889940");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//console log when bot is online
client.once('ready', () => {
    console.log('hihihi SADBABYROBOT is online HHIHIIII:D');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // list commands and stuff
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if(command === 'roll'){
        client.commands.get('roll').execute(message, args);
    }
});

client.login('./secret/secret.txt');
