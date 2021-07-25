let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/baka?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'baka.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['baka'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(baka)$/i

module.exports = handler