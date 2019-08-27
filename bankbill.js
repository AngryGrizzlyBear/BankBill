const {prefix, token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('pong');
  } else if (msg.content === `${prefix}bread`) {
    msg.reply('M  O  N  E  Y.');
  } else if (msg.content === `${prefix}server`) {
    msg.channel.send(`This server's name is: ${msg.guild.name}`);
  }
});

client.login(token);
