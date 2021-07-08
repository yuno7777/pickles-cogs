const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
    
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.mentions.users.first().username}, you got fed by ${message.author.username} OwO`)
    .setImage(body.url) 
    .setFooter(`© Pickles | Feed`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'feed',
    description: 'Feeds someone OwO',
    category: "Fun",
    usage: 'feed'
  };