let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/hentai?APIKEY=MIMINETBOT`
  conn.sendFile(m.chat, res, 'hentai.gif', `wangy wangy wangy`, m, false)
}
handler.help = ['hentai2'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(hentai2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

