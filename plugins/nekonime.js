
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://leyscoders-api.herokuapp.com/api/nekonime?apikey=MIMINGANZ`
  conn.sendFile(m.chat, buffer, 'nekonime.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['nekonime'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(nekonime)$/i

module.exports = handler