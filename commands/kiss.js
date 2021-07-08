const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them ");
    
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`© Pickles | Kiss`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kiss',
    description: 'Kisses someone OwO',
    category: "Action",
    usage: 'kiss'
  };