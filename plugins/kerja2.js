//
let fs = require('fs')

let handler = async (m, { conn, text }) => {
let total = Math.floor(Math.random() * 19999);
let json = { exp: total }
  conn.reply(m.chat, `Selamat Anda Mendapatkan\n*+${json.exp}* Uang(xp)`, m)
   global.DATABASE._data.users[m.sender].exp += json.exp * 1
}
handler.help = ['kerja','bisnis']
handler.tags = ['premium']
handler.command = /^(kerja|bisnis)/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
