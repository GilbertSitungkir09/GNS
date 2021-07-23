let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`).then ((res) => {
	 	let hasil = `Judul :${res.data.result.title}\nStory :${res.data.result.story}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ceritahoror'].map(v => v + ' ')
handler.tags = ['quotes']
handler.command = /^(ceritahoror)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler