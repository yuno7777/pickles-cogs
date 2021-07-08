const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
      .setColor('#FFE5B4')   
      .setTitle("Invite The Bot To Your Server")
      .setDescription(":link: [Invite Link](https://discord.com/api/oauth2/authorize?client_id=862144708789010432&permissions=4294836177&scope=bot)")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Support Server Link", ":link: [Support Server](https://discord.gg/75tGbKyNzH)")
      .setFooter(`Invite | ©️ 2021 Pickles`,client.user.displayAvatarURL());

      return message.channel.send(invite);
}

module.exports.help = {
  name: "invite"
}