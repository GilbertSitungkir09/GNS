let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/bonk?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'bonk.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['bonk'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(bonk)$/i

module.exports = handler