let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
//if (text) return conn.reply(m.chat, '⌛ *EN PROCESO* ⌛', m)
let url = 'https://videfikri.com/api/textmaker/shadowtext/?text=' + encodeURIComponent(text)

conn.sendFile(m.chat, url, m)

}
handler.help = ['sombra']
handler.tags = ['image']
handler.command = /^sombra?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler