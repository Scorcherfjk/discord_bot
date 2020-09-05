const Discord = require('discord.js');

const character = (data) => {
  const embed = new Discord.MessageEmbed()
  .setColor('#3311ff')
  .setImage(data.image)
  .setTitle(`Hola mi nombre es ${data.name}!`)
  .setDescription(`actualmente estoy en ${data.location.name}`)
  .setTimestamp(data.created)

  return embed;
}

module.exports = {
  character
}