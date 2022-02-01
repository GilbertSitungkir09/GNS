let fs = require ('fs')
let path = require('path')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  let nomor = 'wa.me/6285362893068'
  let gw = 'wa.me/628998245333'
  let ig = 'https://bit.ly/3eHTz26'
  let yt = 'https://bit.ly/2Rh2KxG'
  let fitur = '± 1000 Fitur'
  let linkgroup1 = 'https://bit.ly/35KqDBs'
  let linkgroup2 = 'https://bit.ly/3ql2URR'
  try {
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi 🌄'

				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi 🌄'
				} else if (jam >= '10' && jam <= '14') {
				ucapanWaktu = 'Selamat Siang ☀️'
				} else if (jam >= '14' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore 🌅'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam 🌙'
				} else {
				ucapanWaktu = 'Selamat Malam 🌙'
				}
const freply = {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {

					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/Am1sSqpVypFpsQawFUFkm4HgkPRqEx8rt32niyBmL4Wa.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								"fileLength": "43344",
								"height": 1080,
								"width": 1080,
								"mediaKey": "cX+6c20dws6B++0slmMNXcCk7omK+zvheoN6087j9nl=",
								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								"mediaKeyTimestamp": "1612168223"
		},
							"productId": "3872465552870232",
							"title": `${ucapanWaktu} ${conn.getName(m.sender)}`,
							"currencyCode": "USD",
							"priceAmount1000": "99",
							"productImageCount": 1
						},
						"businessOwnerJid": "628998245333@s.whatsapp.net"}}}    
let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let { exp, limit, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let tags = {
      'main': 'Start Bot',
      'daftar': 'Daftar',
      'xp': 'Exp & Limit',
      'wibu': 'Anime Menu',
      'fun': 'Fun',
      'belajar': 'Education Menu',
      'nulis': 'MagerNulis & Logo',
      'hadiah': 'Hadiah',
      'rpg': 'Adventure Menu',
      'dewasa': '18+ Menu',
      'database': 'Database',
      'admin': 'Admin Menu',
      'absen': 'Absen Menu',
      'vote': 'Voting Menu',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Prank Menu',
      'sticker': 'Creator Menu',
      'editor': 'Editor Menu',
      'game': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'VideoMaker Menu',
      'anonymous': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'video': 'Video Maker',
      'quotes': 'Random Menu',
      'quran': 'Islam Menu',
      'primbon': 'Primbon Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'internet': 'Internet',
      'dm': 'List Game',

    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
${ucapanWaktu} ${conn.getName(m.sender)}
╔══°❀❬ *${conn.user.name}* ❭❀°══
║
╠➥ Nama : *%name*
╠➥ Tersisa *%limit Limit*
╠➥ Level *%level (%exp / %maxexp)*
║     [%xp4levelup lagi untuk levelup]
╠➥ %totalexp XP in Total
╚══════════════════

╔══°❀❬ *Info* ❭❀°══
╠➥ Online : *%uptime (%muptime)*
╠➥ Database: %rtotalreg of %totalreg
╠➥ Nomor Owner :
╠➪ ${gw}
╠➥ Nomor Bot :
╠➪ ${nomor}
╠➥ Prefix : *%p*
╠➥ Fitur : ${fitur}
╚══════════════════

╔══°❀❬ *Time* ❭❀°══
╠➥ Tanggal : *%week %weton, %date*
╠➥ Waktu : *%time*
╚══════════════════

╔═➤❀❬ *Join GRUP* ❭❀
╠➤ 1. ${linkgroup1}
╠➤ 2. ${linkgroup2}

╔══°❀❬ *SOSMED* ❭❀°══
╠➥ YouTube : *${yt}*
╠➥ Instagram : *${ig}*
╚══════════════════

%readmore`
    let header = conn.menu.header || '╔══°❀❬ *%category* ❭❀°══'
    let body   = conn.menu.body   || '╠➥ %cmd%islimit'
    let footer = conn.menu.footer || '╚══════════════════\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Bot By:\nwa.me/${global.conn.user.jid.split`@`[0]}`) + `\n*GNSBOT*\n\`\`\`\Owner By.GILBERT SITUNGKIR\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
    ppnya = await require('node-fetch')(await conn.getProfilePicture(conn.user.jid)).then(v => v.buffer())
    conn.sendMessage(m.chat, ppnya, 'imageMessage', { caption: text.trim(), sendEphemeral: true, quoted: m, contextInfo : { mentionedJid: conn.parseMention(text) }})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu','menu','help','?']
handler.tags = ['main']
handler.command = /^(allmenu|menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
