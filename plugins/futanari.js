let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/futanari?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'futanari.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['futanari'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(futanari)$/i

module.exports = handler