let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Yang Ingin Di search'
  m.reply('*[❗] WAIT, Sedang Proses...*')
  let res = await fetch(`https://api.xteam.xyz/search/shopeesearch?q=${response}&APIKEY=MIMINETBOT`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'shopeesearch', `${response}`, m, false)
}
handler.help = ['shoope'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(shoope)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler


