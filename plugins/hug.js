let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/hug?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'hug.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['hug'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(hug)$/i

module.exports = handler