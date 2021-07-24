let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/yaoi?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'yaoi.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['yaoi'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(yaoi)$/i

module.exports = handler