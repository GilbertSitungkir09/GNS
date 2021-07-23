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
    let limit = 20
    let member = data.length
    if (member <= limit) {
      conn.reply(res.gid, `Maaf ${joiner} Bot tidak dapat masuk,, Minimal Member harus ${limit} orang.`)
      await time(3000)
      conn.reply(res.gid, `Maaf Semua,, Bot akan keluar..`)
      await time(2000)
 await conn.groupLeave(res.gid)
  } else if (member => limit) {
     conn.reply(res.gid, `Hallo Member Grup\n*${grup}*\nAku telah ditambahkan oleh *${joiner}*\n\nKetik ${usedPrefix}menu untuk memulai Bot yaa ;)\n\n╔═══°❀❬ *Follow* ❭❀°═══\n╠➥ *IG OWNER :*\n╠➪ *https://bit.ly/3eHTz26*\n╠➥ *IG BOT :*\n╠➪ *https://bit.ly/3w0JdAO*\n╚══════════════════`)
 }
}
handler.help = ['oautojoin <link gc>']
handler.tags = ['premium']
handler.command = /^(oautojoin)$/i

handler.owner = true
handler.premium = false

module.exports = handler
