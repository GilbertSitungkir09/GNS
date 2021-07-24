let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/halolewd?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'halolewd.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['halolewd'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(halolewd)$/i

module.exports = handler