const {
    MessageEmbed
} = require("discord.js")
module.exports = async (channel, title, description, color) => {
    let embed = new MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
    await channel.send(embed)
}