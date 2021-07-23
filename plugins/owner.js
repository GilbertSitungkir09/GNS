let handler = function (m) {
  // this.sendContact(m.chat, '628998245333', 'Gilbert S', m)//Contoh bro
  conn.sendContact(m.chat, '628998245333', 'Owner GNS >_<', m)
  conn.reply(m.chat, 'Tuh Owner Ku, Jangan Di Spam Yak > _ <', m)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
