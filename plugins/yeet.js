let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/yeet?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'yeet.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['yeet'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(yeet)$/i

module.exports = handler