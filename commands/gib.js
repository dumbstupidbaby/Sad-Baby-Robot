// module.exports = {
//     name: 'gib',
//     description: "gives roles when asked to get them",
//     execute(client, message, args, customization){
//         //check if the bot has permissions
//         if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")){
//             client.constructor(message.channel, "Error!", "Robot does not have the **MANAGE ROLES** Permission", "RED");
//         }
//         let member = message.guild.member();
//         //check if the role exists
//         //let rname = message.content.split(" ").splice(2).join(" ");
//         let rname = args;
//         let role = message.guild.roles.cache.find(val => val.name === rname);
//         if (!role){
//             return client.constructor(message.channel, "Error!", `${rname} isn't a role on this server`, "RED");
//         } 
//         if (message.member.roles.highest.position <= role.position){
//             return client.constructor(message.channel, "Error!", "User's highest role is lower than the specified role.", "RED");
//         }
//         if (message.guild.member(client.user).roles.highest.position <= role.position){
//             return client.constructor(message.channel, "Error!", "Robot's highest role is lower than the specified role.", "RED");
//         }
//         member.roles.add(role).catch(e => {
//             return client.constructor(message.channel, "Error!", "", "RED");
//         });
//         return client.constructor(message.channel, "Done!", `<a:balancecheck:556017659419033653> **${message.author.username}**, I've added the **${rname}** role!`, "GREEN");
//     }
// }