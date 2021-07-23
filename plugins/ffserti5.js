let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://onlydevcity.xyz/FFSerti4/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'ffserti5.jpg', `Nih kak`, m, false)
}
handler.help = ['ffserti5'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ffserti5)$/i

module.exports = handler

