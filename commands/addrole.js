// //const { GuildMember } = require("discord.js");

// module.exports = {
//     name: 'addrole',
//     description: "adds role when asked",
//     execute(client, message, args, customization){
//         //defining variables so its easier for me to understand
//         //let rname = message.content.split(" ").splice(2).join(" ");
//         //let role = message.guild.roles.cache.find(val => val.name === rname);
//         //let member = message.guild.member();
//         //let botRolePosition = message.guild.member(client.user).roles.highest.position;
//         //let userRolePosition = message.author.highest.role.position;
//         let role = message.guild.roles.cache.find(r => r.name === '{Role Name}');
//         const guild = client.guilds.cache.get(guildID);
//         const member = guild.members.cache.get(userID);
//         if (!guild) return client.constructor(message.channel, "Error!", `Guild ID ${guildID} not found`, "RED");
//         if (!member) return client.constructor(message.channel, "Error!", `User ID ${userID} not found in guild ${guild.name}, ID: ${guildID}`, "RED");
//         if (! guild.me.hasPermission('MANAGE_ROLES')) return client.constructor(message.channel, "Error!", `I do not have permissions to manage roles`, "RED");
//         //return console.error("404: user with ID", userID, "not found in guild", guild.name);


//         //if (userRolePosition <= role.position){
//         //    return client.constructor(message.channel, "Error!", "User's highest role is lower than the specified role.", "RED");
//         //}
//         //if (botRolePosition <= role.position){
//         //    return client.constructor(message.channel, "Error!", "Robot's highest role is lower than the specified role.", "RED");
//         //}
//         //if(!message.guild.roles.find(r => r.name === '{Role Name}')){
//         //    return client.constructor(message.channel, "Error!", `${role} isn't a role on this server`, "RED");
//         //} 
//         //message.member.addRole(role);
//         member.roles.add(role);
//         return client.constructor(message.channel, "Done!", `<a:balancecheck:556017659419033653> **${message.author.username}**, I've added the **${role}** role!`, "GREEN");
//     }
// }