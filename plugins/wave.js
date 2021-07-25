let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/wave?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'wave.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['wave'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(wave)$/i

module.exports = handler