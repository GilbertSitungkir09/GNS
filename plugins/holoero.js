let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/holoero?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'holoero.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['holoero'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(holoero)$/i

module.exports = handler