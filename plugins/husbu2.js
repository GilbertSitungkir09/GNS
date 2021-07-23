let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('xteam', '/randomimage/husbu2', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'husbu2.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['husbu2'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(husbu2)$/i
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