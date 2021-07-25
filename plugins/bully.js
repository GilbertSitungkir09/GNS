let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/bully?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'bully.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['bully'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(bully)$/i

module.exports = handler