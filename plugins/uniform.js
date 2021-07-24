let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/uniform?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'uniform.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['uniform'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(uniform)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true
module.exports = handler