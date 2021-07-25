let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/smug?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'smug.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['smug'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(smug)$/i

module.exports = handler