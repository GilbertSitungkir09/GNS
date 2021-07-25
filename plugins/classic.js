let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/classic?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'classic.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['classic'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(classic)$/i

module.exports = handler