module.exports = {
  name: 'permissions',
  description: 'permission-check',
  execute(msg, args) {
   msg.guild.createRole({
      name: 'M O N E Y',
      permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS'],
    });
  },
};
