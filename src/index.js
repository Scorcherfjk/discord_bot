const Discord = require('discord.js');
const config = require('./config');
const { saludoConfianzudo, saludoRespetuoso } = require('./custom/messageEmbed');

const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log(`Conected like ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content.toLocaleLowerCase() === 'hola') {
    msg.react('👍');
    msg.reply('Que te cuentas?');
  }

  if (msg.content.toLocaleLowerCase() === 'hi') {
    msg.channel.send(saludoConfianzudo(msg));
  }

  if (msg.content.toLocaleLowerCase() === 'saludos') {
    msg.channel.send(saludoRespetuoso(msg));
  }
});
