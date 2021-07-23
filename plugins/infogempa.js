let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerahnya', m)

	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=Tobzzz17`, {method: 'get'})
	if (anu.error) return reply(anu.error)
    buff = await getBuffer(anu.map)
	 	let hasil = `Waktu Daerah *${text}*\n\nJam : ${res.data.time}\nTanggal : ${res.data.date}\nInfo : ${res.data.title}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['infogempa'].
handler.tags = ['tools']
handler.command = /^(infogempa)$/i
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