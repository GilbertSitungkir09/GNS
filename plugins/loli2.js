let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await require('node-fetch')('https://711f90d4694b.ngrok.io/api/loli').then(v => v.buffer())
   conn.sendFile(m.chat, heum, 'Server Error!', 'Lolinya kak', m, false)
}
handler.help = ['loli2']
handler.tags = ['wibu']
handler.command = /^loli2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler