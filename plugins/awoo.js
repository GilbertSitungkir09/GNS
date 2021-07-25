let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/awoo?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'awoo.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['awoo'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(awoo)$/i

module.exports = handler