//
const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const gs = require('nekos.life')
const neko = new gs()

let handler  = async (m, { conn, text }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
  pp = (await neko.nsfw.nekoGif()).url
                     await sticker(false, pp, 'NSFW Neko', author).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  //if (!text) throw 'Uhm...Teksnya?'
}
handler.help = ['nsfwneko']
handler.tags = ['dewasa']
handler.command = /^nsfwneko$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true 
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler