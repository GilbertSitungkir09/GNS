let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Memasak','Membantu Atok','Mabar','Nobar','Sosmed an','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Gelud','Menari','Gelud','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri.','Menari','Gelud','Futsal','Bermain Volly','Bermain Bola']])}
`.trim(), m)
}
handler.help = ['hobby <teks>?']
handler.tags = ['game']
handler.customPrefix = /(\?$)/
handler.command = /^hobby/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

