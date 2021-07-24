let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/splaybutton?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'splaybutton.jpg', `Semoga terwujud ya kak 😍`, m, false)
}
handler.help = ['splaybutton'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(splaybutton)$/i

module.exports = handler

