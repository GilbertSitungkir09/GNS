let handler = async (m, { conn, command, args }) => {
	let chats = conn.chats.all().map(chat => chat.jid)
  //let chats = args.length > 0 && /group|gc/i.test(args[0]) ? conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.pin).map(v => v.jid) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete').catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, `*Sukses delete All chat* `, m)
}
handler.help = ['deletechat', 'deletechat group', 'mutechat', 'mutechat group']
handler.tags = ['owner']
handler.command = /^clearallchat|clearall|deletechat|mutechat group$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler