let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/loli?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'loli.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['nsfwloli'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(nsfwloli)$/i

module.exports = handler