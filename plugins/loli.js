let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://recoders-area.caliph.repl.co/api/loli`
  conn.sendFile(m.chat, res, 'loli.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(loli)$/i
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

