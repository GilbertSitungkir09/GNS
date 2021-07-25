let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/fox_girl?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'fox_girl.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['foxgirl'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(foxgirl)$/i

module.exports = handler