let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/waifu?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'waifu.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['waifu4'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(waifu4)$/i

module.exports = handler