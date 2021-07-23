let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/cowo?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'cowo.jpg', `*Nih Ganteng Kan*\n\n*Jangan Lupa Nikahin:v*`, m, false)
}
handler.help = ['cowok'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(cowok)$/i

module.exports = handler