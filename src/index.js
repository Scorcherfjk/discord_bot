const Discord = require('discord.js');
const config = require('./config');
const { saludoConfianzudo, saludoRespetuoso } = require('./custom/messageEmbed');
const { character } = require('./custom/customResponseApi')
const { getData } = require('./api/rickAndMorty');

const client = new Discord.Client();

client.login(config.token);

client.on('ready', () => {
  console.log(`Conected like ${client.user.tag}`);
});

client.on('message', async (msg) => {
  if (msg.content.toLocaleLowerCase() === 'hola') {
    msg.react('👍');
    msg.reply('Que te cuentas?');
  }else if (msg.content.toLocaleLowerCase() === 'hi') {
    msg.channel.send(saludoConfianzudo(msg));
  }else if (msg.content.toLocaleLowerCase() === 'saludos') {
    msg.channel.send(saludoRespetuoso(msg));
  } else if (msg.content === 'como esta rick?'){
    const res = await getData();
    msg.channel.send(character(res));
  }
});
