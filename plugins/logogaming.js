let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Sedang Dalam Proses...*')
  let res = `https://docs-jojo.herokuapp.com/api/gaming?text=${response}`
  conn.sendFile(m.chat, res, 'gaming.jpg', `Nih kak`, m, false)
}
handler.help = ['logogaming'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(logogaming)$/i

module.exports = handler

