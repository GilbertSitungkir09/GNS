let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://neko-love.xyz/api/v1/slap')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Slap', '@gilbert_situngkir09')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['slap']
handler.tags = ['image']
handler.command = /^slap/i

module.exports = handler
