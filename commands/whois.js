const moment = require('moment');
const Discord = require('discord.js');
function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = async (client, message, args, customisation) => {
  let user = message.mentions.users.first();
  let muser = message.guild.member(message.mentions.users.first());
  if(!message.mentions.users.first() && args.length > 0){
    user = message.guild.member(args[0]).user
    muser = message.guild.member(args[0]);
  }
  if (!muser) muser = message.member;
  if(!user) user = message.author;



  const embed = new Discord.MessageEmbed();
  embed.addField("Username", `${user.username}#${user.discriminator}`, true)
          .addField("ID", `${user.id}`, true)
          .setColor("#F3F3F3")
          .setThumbnail(`${user.avatarURL()}`)
          .setTimestamp()
          .setURL(`${user.avatarURL()}`)
          
          
          .addField('Joined Discord', `${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`, true)
          .addField('Joined Server', `${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`, true)
          .addField('Roles', `${muser.roles.cache.array()}`, true)
          .setFooter('Pickles | whois' ,client.user.displayAvatarURL())
	 
          
      message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'whois',
  description: 'Displays information about a user.',
  category: "Useful",
  usage: 'whois <@user>'
};