const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kill them ");
    
    const { body } = await superagent
    .get("https://nekos.life/api/kill");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username} killed ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setFooter(`© Pickles | Kill`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kill',
    description: 'Kills someone OwO',
    category: "Action",
    usage: 'kill'
  };