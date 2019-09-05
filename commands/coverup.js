module.exports = {
  name: 'coverup',
  description: 'Deletes messages anywhere from 1 to 99',
  execute(msg, args) {
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
  },
};
