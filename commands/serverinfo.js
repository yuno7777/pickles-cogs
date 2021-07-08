const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`Info of ${message.guild.name}`)
            .addFields(
                {
                    name: "Owner: ",
                    value: `\u2000${await message.guild.members.fetch(message.guild.ownerID).then(x => x.user.tag)}`,
                    inline: true
                },
                {
                    name: "Members: ",
                    value: `${message.guild.memberCount} `,
                    inline: true
                },
                
                {
                    name: "Total Bots: ",
                    value: `${message.guild.members.cache.filter(m => m.user.bot).size}`,
                    inline: true
                },
                {
                    name: "Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles: ",
                    value: `${message.guild.roles.cache.size}`,
                    inline: true,
                },
                {
                    name: ` Region: `,
                    value: region,
                    inline: true
                },
                
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size}` : 'There are no emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}