let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/handhold?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'handhold.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['handhold'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(handhold)$/i

module.exports = handler