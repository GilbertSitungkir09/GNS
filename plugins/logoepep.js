let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/epep?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'epep.jpg', `Nih kak`, m, false)
}
handler.help = ['logoepep'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(logoepep)$/i

module.exports = handler

