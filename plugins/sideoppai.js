let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/nsfw/sideoppai?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'sideoppai.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['sideoppai'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(sideoppai)$/i

module.exports = handler