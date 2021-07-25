let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/cum_jpg?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'cum_jpg.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cum'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(cum)$/i

module.exports = handler