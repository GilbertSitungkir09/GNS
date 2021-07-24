let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['100%','97%','95%','92%','1%','90%','87%','85%','82%','1%','80%','77%','75%','72%','70%','1%','67%','65%','62%','60%','57%','1%','55%','52%','50%','47%','45%','42%','40%','35%','30%','25%','20%','15%','10%','5%','1%','1%'])}
`.trim(), m)
}
handler.help = ['rate <yg ingin d rate>']
handler.tags = ['game']
handler.command = /^rate/i
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

