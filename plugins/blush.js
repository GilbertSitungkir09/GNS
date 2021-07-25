let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/blush?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'blush.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['blush'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(blush)$/i

module.exports = handler