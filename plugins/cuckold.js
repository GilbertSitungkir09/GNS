let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/cuckold?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'cuckold.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cuckold'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(cuckold)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
module.exports = handler