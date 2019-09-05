module.exports = {
  name: 'server',
  description: 'Server',
  execute(msg, args) {
    msg.channel.send(
      `This server's name is: ${msg.guild.name}
       Total members: ${msg.guild.memberCount}
       Created: ${msg.guild.createdAt}
       Region: ${msg.guild.region}`,
    );
  },
};
