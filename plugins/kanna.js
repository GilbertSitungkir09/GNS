let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/kanna?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'kanna.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['kanna'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(kanna)$/i

module.exports = handler