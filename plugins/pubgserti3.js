let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'pubgserti3.jpg', `Nih kak`, m, false)
}
handler.help = ['pubgserti3'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(pubgserti3)$/i

module.exports = handler

