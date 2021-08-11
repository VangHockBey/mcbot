
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async (client, message, args) => { 

  let prefix = ayarlar.prefix;
  const embed = new Discord.MessageEmbed()
  .setTitle("InFlames Server Status | Sosyal Menüsü")
  .setDescription(`İşte Sosyal Medyada Biz. \n  [Discord](https://discord.gg/rabel)`)
  .setThumbnail(client.user.avatarURL())
message.channel.send(embed)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['social','']
  }
  exports.help = {
    name: 'sosyal'
  }