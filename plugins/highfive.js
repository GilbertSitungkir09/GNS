let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/highfive?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'highfive.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['highfive'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(highfive)$/i

module.exports = handler