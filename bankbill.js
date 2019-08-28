const {prefix, token} = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (msg.content === `${prefix}ping`) {
    msg.reply('pong');
  } else if (msg.content === `${prefix}bread`) {
    msg.reply('**M  O  N  E  Y.**');
  } else if (msg.content === `${prefix}server`) {
    msg.channel.send(`This server's name is: ${msg.guild.name}\n
      Total members: ${msg.guild.memberCount}\n
      Created: ${msg.guild.createdAt}\n
      Region: ${msg.guild.region}`);
  } else if (command === 'args-info') {
    if (!args.length) {
      return msg.channel.send(
        `You didn't provide any arguments, ${msg.author}!`,
      );
    }
    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});

client.login(token);
