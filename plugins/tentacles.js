let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/tentacles?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'tentacles.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['tentacles'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(tentacles)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler