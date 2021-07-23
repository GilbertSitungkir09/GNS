let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/bts?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'bts.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['bts'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(bts)$/i

module.exports = handler