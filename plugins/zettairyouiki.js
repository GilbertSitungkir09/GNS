let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/zettairyouiki?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'zettairyouiki.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['zettairyouiki'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(zettairyouiki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

