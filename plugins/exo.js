let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/exo?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'exo.jpg', `Nih Kak, m, false)
}
handler.help = ['exo'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(exo)$/i

module.exports = handler