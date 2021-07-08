exports.run = (client, message, customisation) => {
  var owner = customisation.ownerid
  
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to punch them.')

  if(user.id === client.user.id) return message.channel.send(`**Punches ${user.username}**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'Punches a user.',
  category: "Action",
  usage: 'punch <user>'
};