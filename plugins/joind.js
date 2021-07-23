const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan Link Group\n\nContoh: !join  [Link Grup]', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Link Terlalu Panjang, Sepertinya Ini Bukan Link Grup:v', m)
    var nomor = m.sender
    const teks1 = `*[ Join Grup ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('628998245333@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Link Anda telah dikirimkan ke Owner\nSilahkan Chat Ke Owner Dan Konfrimasi Pembayaran\n\nNomer Owner :wa.me/628998245333\n*Kontak Owner⬇️⬇️*', m)
    this.sendContact(m.chat, '628998245333', 'Owner Tungkir BOT ^_^', m)
}
handler.help = ['join <link gc>']
handler.tags = ['daftar']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
