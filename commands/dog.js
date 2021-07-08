const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args, customisation, tools) => {
    const { body } = await superagent
    .get("http://random.dog/woof.json");
    //.get('https://dog.ceo/api/breeds/image/random');
    link = body.url;

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Have Fun!")
    .setImage(body.url)
    .setFooter(`© Pickles | Dog`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'dog',
    description: 'Sends a random doggo',
    category: "Fun",
    usage: 'dog'
  };