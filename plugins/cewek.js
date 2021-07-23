let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/cewek?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'cewek.jpg', `*Nih Cantik Kan*\n\n*Jangan Lupa Nikahin:v*`, m, false)
}
handler.help = ['cewek'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(cewek)$/i

module.exports = handler