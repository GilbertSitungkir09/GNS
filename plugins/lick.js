let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/lick?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'lick.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['lick'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(lick)$/i

module.exports = handler