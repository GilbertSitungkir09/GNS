let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${response}`
  conn.sendFile(m.chat, res, 'bneon.jpg', `Nih kak`, m, false)
}
handler.help = ['bneon'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(bneon)$/i

module.exports = handler

