let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/nsfw_avatar?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'nsfw_avatar.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ppnsfw'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(ppnsfw)$/i

module.exports = handler