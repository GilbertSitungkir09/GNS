let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/darkjoke?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'darkjoke.jpg', `AwokAwokAwokAwok`, m, false)
}
handler.help = ['darkjoke'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(darkjoke)$/i


module.exports = handler