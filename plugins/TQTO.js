//di ilangin jangan,di tambahin boleh
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['Nurotomo <dev>','RendyCraft <pengembang>','Drawl Nag <pengembang>','Ibnu NR <pengembang>','Gilbert S <pengembang>','Lamsar S <Kang Recode>']
handler.tags = ['thnks']
handler.customPrefix = /(\?$)/
handler.command = /^(Gilbertganteng)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler