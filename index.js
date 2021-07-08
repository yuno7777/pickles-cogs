const Discord = require('discord.js');
const mySecret = process.env['token']
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
client.config = config;
client.commands = new Discord.Collection();
client.queue = new Map();
client.vote = new Map();
client.aliases = new Discord.Collection();

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(` Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`Command loaded: ${commandName}`);

  
    });

});

// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("online");
    console.log("Im Alive")
});


require('http').createServer((req, res) => res.end('Im alive')).listen(3000)


client.on
client.on("ready", () => {
    client.user.setActivity("p?help", { type: "WATCHING"})
})

// Login through the client
client.login(mySecret);
