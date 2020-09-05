const Discord = require('discord.js');

const saludoConfianzudo = (msg) => {
  const embed = new Discord.MessageEmbed()
  .setColor('#ff0000')
  .setTitle(`Hola compadre! @${msg.author.username}`)
  .setDescription('estoy cansado, asi que no molestes!')
  .setTimestamp(Date.now())

  return embed;
}

const saludoRespetuoso = (msg) => {
  const embed = new Discord.MessageEmbed()
  .setColor('#006666')
  .setTitle(`Hola distinguido caballero @${msg.author.username}`)
  .setDescription('lo siento, en este momento me encuentro indispuesto')
  .setTimestamp(Date.now())

  return embed;
}


module.exports = {
  saludoConfianzudo,
  saludoRespetuoso
}