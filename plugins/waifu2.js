let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://recoders-area.caliph.repl.co/api/waifu?apikey=${APIKeys["https://recoders-area.caliph.repl.co"]}`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', 'Waifunya kak', m, false)
}
handler.help = ['waifu2']
handler.tags = ['wibu']
handler.command = /^(waifu2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


