let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`).then ((res) => {
	 	let hasil = `Foto :${res.data.gambar}\nCerita :${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cersex'].map(v => v + ' ')
handler.tags = ['premium']
handler.command = /^(cersex)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler