let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'pubgserti4.jpg', `Nih kak`, m, false)
}
handler.help = ['pubgserti4'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(pubgserti4)$/i

module.exports = handler

