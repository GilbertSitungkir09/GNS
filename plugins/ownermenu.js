let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/pp.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃[${max - exp} lagi untuk levelup]
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Nomor :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃•  *Api Whatsapp :* wa.me/${who.split`@`[0]}
┃•  *Terdaftar :* ${registered ? 'Yes': 'No'}
┃
┣━━°❀❬ *OWNER MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}addprem <@user>*
┣➥ *${usedPrefix}apikey*
┣➥ *${usedPrefix}banchat*
┣➥ *${usedPrefix}ban*
┣➥ *${usedPrefix}block <@user>*
┣➥ *${usedPrefix}broadcast <teks>*
┣➥ *${usedPrefix}bc <teks>*
┣➥ *${usedPrefix}broadcastgroup <teks>*
┣➥ *${usedPrefix}bcgc <teks>*
┣➥ *${usedPrefix}deletechat*
┣➥ *${usedPrefix}deletechat group*
┣➥ *${usedPrefix}mutechat*
┣➥ *${usedPrefix}mutechat group*
┣➥ *${usedPrefix}oadd @user*
┣➥ *${usedPrefix}o+ @user*
┣➥ *${usedPrefix}odemote @user*
┣➥ *${usedPrefix}omember @user*
┣➥ *${usedPrefix}ov @user*
┣➥ *${usedPrefix}okick @user*
┣➥ *${usedPrefix}o- @user*
┣➥ *${usedPrefix}oleave*
┣➥ *${usedPrefix}okeluar*
┣➥ *${usedPrefix}opengumuman [teks]*
┣➥ *${usedPrefix}ohidetag [teks]*
┣➥ *${usedPrefix}opromote @user*
┣➥ *${usedPrefix}oadmin @user*
┣➥ *${usedPrefix}o^ @user*
┣➥ *${usedPrefix}setbye <teks>*
┣➥ *${usedPrefix}setmenu <teks>*
┣➥ *${usedPrefix}setmenubefore <teks>
┣➥ *${usedPrefix}setmenuheader <teks>
┣➥ *${usedPrefix}setmenubody <teks>
┣➥ *${usedPrefix}setmenufooter <teks>
┣➥ *${usedPrefix}setmenuafter <teks>
┣➥ *${usedPrefix}setppbot
┣➥ *${usedPrefix}seticonbot
┣➥ *${usedPrefix}setprefix <prefix>
┣➥ *${usedPrefix}setwelcome <teks>
┣➥ *${usedPrefix}berhenti
┣➥ *${usedPrefix}stop
┣➥ *${usedPrefix}warn
┣➥ *${usedPrefix}unwarn
┣➥ *${usedPrefix}unbanchat
┣➥ *${usedPrefix}unban
┣➥ *${usedPrefix}unblock <@user>
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo (author)*
┣➥ *Ibnu NR (pengembang)*
┣➥ *RC047 (pengembang)*
┣➥ *Caliph (pengembang)*
┣➥ *Gilbert S (pengembang)*
┣➥ *Layscode*
┣➥ *Zeks*
┣➥ *Dll
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['ownermenu']
handler.tags = ['jj']
handler.command = /^(ownermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

