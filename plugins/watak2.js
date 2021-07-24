let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu','Top deh pokoknya','Suka Membantu'])}
`.trim(), m)
}
handler.help = ['watak <siapa>']
handler.tags = ['game']
handler.command = /^watak/i
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

