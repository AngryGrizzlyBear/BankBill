module.exports = {
  name: 'subjugation',
  description: 'Threatens a user on a ban.',
  execute(msg, args) {
    if (!msg.mentions.users.size) {
      return msg.reply(`Who's out here doing illegal shit?`);
    }

    const taggedUser = msg.mentions.users.first();

    msg.channel.send(
      `If the bank don't get to you. I'mma get to you, ${taggedUser.username}.`,
    );
  },
};
