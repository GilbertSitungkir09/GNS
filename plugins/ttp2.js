const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks?'
  let stiker = await sticker(null, global.API('lol', '/api/ttp', { text }, 'apikey'), global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}
handler.help = ['ttp2 <teks>']
handler.tags = ['sticker']
handler.command = /^ttp2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler