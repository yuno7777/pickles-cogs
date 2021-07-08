const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setColor('#FFE5B4')    
     
      .setTitle("Pickles")
      .setDescription("**Below are Commands you can do with Bot.**")
      .addField("Anime Commands", '`anime <name of anime>`,`pokemon <name>`')
      .addField("Fun Commands", '`cat`,`color`,`cry`,`cuddle`,`dog`,`feed`,`hug`,`invert`,`hug`,`jail`,`kill`,`kiss`,`meme`,`owoify`,`pat`,`poke`,`punch`,`rate`,`rip`,`slap`,`urban`')
      .addField("Utility/Moderation Commands", '`avatar`,`roleinfo`,`roll`,`say`,`serverinfo`,`setnick`,`sm`,`snipe`,`steal`,`totalbans`,`whois`')
      .addField("Suggestion Command", '`setsuggest <channel>`,`suggest <arguments>`,`reply <msg id> <your reply>`')
      .addField('Invite The Bot' , ':link: [Invite](https://discord.com/api/oauth2/authorize?client_id=862144708789010432&permissions=4294836177&scope=bot)')
      .setTimestamp()
      .setFooter("Pickles | Developed by yuno#0777", client.user.displayAvatarURL());
  

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
