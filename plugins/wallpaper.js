let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/wallpaper?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'wallpaper.jpg', `Nih Kak >_<`, m, false)
}
handler.help = ['wallpaper2', 'wp2'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(wallpaper2|wp2)$/i

module.exports = handler