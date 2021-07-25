let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/eroyuri?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'eroyuri.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['eroyuri'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(eroyuri)$/i

module.exports = handler