module.exports = {
  name: 'rolemake',
  description: 'rolemake',
  execute(msg, args) {
    msg.guild.createRole({
      name: 'M O N E Y',
      permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS'],
    });
  },
};
