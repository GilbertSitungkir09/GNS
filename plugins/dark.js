let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/dark?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'dark.jpg', `AwokAwokAwokAwok`, m, false)
}
handler.help = ['dark'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(dark)$/i

module.exports = handler