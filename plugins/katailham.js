let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.ilham)}”`, m)
}
handler.help = ['katailham']
handler.tags = ['quotes']
handler.command = /^(katailham)$/i
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
  return list[Math.floor(list.length * Math.random())]
}

global.ilham = [
"” Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep”\n- Kata ilham.",
"” Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas”\n– kata ilham.",
"” Dia hanya menghargaimu, bukan mencintaimu”\n– kata ilham.",
"” Keadilan sosial hanya berlaku bagi warna negara yang good looking ”\n– kata ilham.",
"” Jangan jadi pelangi untuk orang yang buta warna ”\n– kata ilham.",
"” Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat ”\n– kata ilham.",
"” Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta ”\n– kata ilham.",
"” Mencintaimu adalah seni menyakiti diri”\n– kata ilham.",
"” Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya ”\n– kata ilham.",
"” Cukup tahu namaku, jangan rupaku”\n– kata ilham.",
"” Sesuatu akan terasa berharga jika sudah kehilangan ”\n– kata ilham.",
"” Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan ”\n– kata ilham."
]
