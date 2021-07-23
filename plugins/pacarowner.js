let handler = function (m) {
  // this.sendContact(m.chat, '628998245333', 'Gilbert Situngkir', m)
  conn.sendContact(m.chat, '628990000000', 'Gk ada Uy :v', m)
  conn.reply(m.chat, `Wkwkwkwk Chat Aja Klau Bisa Bro :v`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
