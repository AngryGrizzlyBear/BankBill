module.exports = {
  name: 'promote',
  description: 'promotes the user',
  execute(msg, args) {
    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        msg.member
          .addRole('614198314577035346')
          .then(() => {
            msg.reply(`Successfully promoted ${user.tag}`);
          })
          .catch(err => {
            msg.reply(`I can't promote this user.`);
            console.error(err);
          });
      } else {
        msg.reply(`This guy doesn't exist`);
      }
    } else {
      msg.reply(`You didn't mention a user to promote homie.`);
    }
  },
};
