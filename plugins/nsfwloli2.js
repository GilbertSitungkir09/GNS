let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/chiisaihentai?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'chiisaihentai.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['chiisaihentai'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(chiisaihentai)$/i

module.exports = handler