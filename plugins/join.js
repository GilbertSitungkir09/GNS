let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix, participants, groupMetadata }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link tidak valid atau tidak ada'
    await m.reply('『Bot akan masuk !』\n*Mohon Tunggu Sebentar*\n\n╔═══°❀❬ *Follow* ❭❀°═══\n╠➥ *IG OWNER :*\n╠➪ *https://bit.ly/3eHTz26*\n╠➥ *IG BOT :*\n╠➪ *https://bit.ly/3w0JdAO*\n╚══════════════════')
    let joiner = await conn.getName(m.sender)
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    if (res.status !== 200) throw `Tidak Dapat Masuk,, mungkin link telah direset ulang atau Bot telah dikeluarkan oleh seseorang.`
    if (global.DATABASE.data.chats[m.chat].welcome) throw false
    let grup = await conn.getName(res.gid)
    let time = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }
    let data = (await conn.groupMetadata(res.gid)).participants.map(u => u.jid)
    let limit = 75
    let member = data.length
    if (member <= limit) {
      conn.reply(res.gid, `Yahhh..😔 Bot Tdk Dapat Bertahan Disini\nMaaf ${joiner} Bot tidak dapat masuk,, Minimal Member harus ${limit} orang👤. ;)`)
      await time(3000)
      conn.reply(res.gid, `Maaf Semua,,🙏🏻 Bot akan keluar..👋🏻`)
      await time(2000)
 await conn.groupLeave(res.gid)
  } else if (member => limit) {
     conn.reply(res.gid, `Hallo Member Grup\n*${grup}*\nAku telah ditambahkan oleh *${joiner}*\n\nKetik ${usedPrefix}menu untuk Menggunakan Bot yaa ;)\nOwh iya.. Jangan Lupa Support Ig Owner Agar Semangat Menambahkan Fitur² Menarik Lainnya.\n╔═══°❀❬ *Follow* ❭❀°═══\n╠➥ *IG OWNER :*\n╠➪ *https://bit.ly/3eHTz26*\n╠➥ *IG BOT :*\n╠➪ *https://bit.ly/3w0JdAO*\n╚══════════════════`)
 }
}
handler.help = ['autojoin <link gc>']
handler.tags = ['premium']
handler.command = /^(autojoin)$/i

handler.premium = true
handler.private = false

module.exports = handler
