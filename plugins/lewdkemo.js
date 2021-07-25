let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(global.API('lol','/api/random2/lewdkemo?', {}, 'APIKEY'))
  conn.sendFile(m.chat, res, 'lewdkemo.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['lewdkemo'].map(v => v + ' ')
handler.tags = ['wibu']

handler.command = /^(lewdkemo)$/i

module.exports = handler