let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/meme?apikey=Ameysbot`
  conn.sendFile(m.chat, res, 'meme.jpg', `AwokAwokAwokAwok`, m, false)
}
handler.help = ['meme2'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(meme2)$/i

handler.private = false
handler.limit = true

module.exports = handler