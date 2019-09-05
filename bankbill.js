const {prefix, token} = require('./config.json');
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(msg, args);
  } else if (command === `bread`) {
    client.commands.get('bread').execute(msg, args);
  } else if (command === `server`) {
    client.commands.get('server').execute(msg, args);
  } else if (command === 'args-info') {
    client.commands.get('args-info').execute(msg, args);
  } else if (command === 'subjugation') {
    if (!msg.mentions.users.size) {
      return msg.reply(`Who's out here doing illegal shit?`);
    } else if (command === 'kick') {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}!`);
    }

    const taggedUser = msg.mentions.users.first();

    msg.channel.send(
      `If the bank don't get to you. I'mma get to you ${taggedUser.username}.`,
    );
  } else if (command === 'situation') {
    return msg.reply(`Look's like we have a lil' situaaaaaaaation.`);
  } else if (command === 'coverup') {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return msg.reply('I need numbers homie.');
    } else if (amount < 1 || amount > 99) {
      return msg.reply('Gimme a number between 1 and 99.');
    }

    msg.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      msg.channel.send(
        'There was an error trying to prune messages in this channel.',
      );
    });
  }
});
// Working on this tomorrow, probably.
client.login(token);
