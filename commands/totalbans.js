const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "totalbans",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`${bans.size} users banned so far :)`)
        })

    }
}