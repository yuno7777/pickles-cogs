const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them");
   
      
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`OwO, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`© Pickles | Slap`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap',
    description: 'Slaps someone OwO',
    category: "Action",
    usage: 'slap'
};