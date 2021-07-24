let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ`
  conn.sendFile(m.chat, buffer, 'ppcouple.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ppcouple'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(ppcouple)$/i

module.exports = handler