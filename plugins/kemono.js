let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/kemonomimi?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'kemonomimi.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['kemono'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(kemono)$/i

module.exports = handler