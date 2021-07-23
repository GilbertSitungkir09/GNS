let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/blackpink?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'blackpink.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['blackpink'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(blackpink)$/i

module.exports = handler