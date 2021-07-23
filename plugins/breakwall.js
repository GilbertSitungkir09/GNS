let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${response}`
  conn.sendFile(m.chat, res, 'breakwall.jpg', `Nih kak`, m, false)
}
handler.help = ['breakwall'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(breakwall)$/i

module.exports = handler

