module.exports = {
  name: 'rate',
  aliases: [],
  group: 'fun',
  description: 'Rates the provided argument',
  parameters: [ 'something to rate with' ],
  examples: [
    'rate Potato',
    'rate cheese',
    'rate Bringles'
  ],
  run: (client, message, args) => {

    if (!args.length){
      return message.channel.send(` ${message.author}! Give me something to rate!!`);
    };

    const raw = args.join(" ")
    let rate = parseInt(raw, 36) % 101;
    const emoji = (rate) => [
        '\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️'
    ][Math.floor(rate / 10)];

    if ([
      'levi, percy, '
    ].includes(raw.toLowerCase())){
      rate = 100;
    };

    return message.channel.send(`${emoji(rate)} (**${rate}**) %`)
  }
};