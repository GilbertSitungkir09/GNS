let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random/cuddle?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'cuddle.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cuddle'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(cuddle)$/i

module.exports = handler