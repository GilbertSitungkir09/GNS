let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply('Sedang Diproses...')

  let res = `http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'editodserti.jpg', `Nih kak >_<`, m, false)

}

handler.help = ['editodserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(editodserti)$/i


module.exports = handler

