let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.zeks.xyz/api/memeindo?apikey=caliph_71')
  let barbar = await url.json()
conn.sendFile(m.chat, barbar.result, 'memeindo', JSON.stringify(barbar, null, 2), m)
}
handler.help = ['memeindo']
handler.tags = ['image']
handler.command = /^(memeindo)$/i

handler.private = false
handler.limit = true

module.exports = handler
