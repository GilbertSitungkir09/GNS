let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/pat?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'pat.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['pat'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(pat)$/i

module.exports = handler