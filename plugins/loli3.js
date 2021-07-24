let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/loli?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'loli.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['loli3'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(loli3)$/i

module.exports = handler