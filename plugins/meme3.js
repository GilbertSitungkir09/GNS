let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/meme2?apikey=Ameysbot`
  conn.sendFile(m.chat, res, 'meme2.jpg', `AwokAwokAwokAwok`, m, false)
}
handler.help = ['meme3'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(meme3)$/i

handler.private = false
handler.limit = true

module.exports = handler