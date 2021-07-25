let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/erokemo?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'erokemo.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['erokemo'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(erokemo)$/i

module.exports = handler