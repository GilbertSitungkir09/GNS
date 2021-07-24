let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
if (m.key.fromMe) return 
if (m.isBaileys) return 
  if (m.mentionedJid.includes('628998245333@s.whatsapp.net') || m.mentionedJid.includes('6281934238364@s.whatsapp.net')) {

this.sendFile(m.chat, './src/tag.webp', 'apsi tag tag', '', m)
if (m.mentionedJid.includes('goblok') || m.mentionedJid.includes('tolol')) {

this.sendFile(m.chat, './src/santuy.webp', 'santuy bro', '', m)
  } else if (m.text.toLowerCase() == 'p') {
m.reply('Utamakan Salam Kak') 
} else if (m.text.toLowerCase().includes('assalamualaikum')) {
m.reply('Waalaikumsalam')
} else if (m.text.toLowerCase().includes('gns')) {
m.reply('Ada Apa Kak??\nKangen Yah? :v\n\nIngin Memulai Bot? Ketik !help atau !menu yaa ;)')
} else if (m.text.toLowerCase().includes('bot')) {
m.reply('Yaa Aku Disini??\n\nIngin Memulai Bot? Ketik !help atau !menu yaa ;)')
} else if (m.text.toLowerCase().includes('save')) {
m.reply('*『Save Wa Owner』*\n\n\n╔══════『Owner』══════\n╠➥ *Gilbert*\n╠➥ *17Thn*\n╠➥ *Sumatera Utara*\n╠➥ *WA :*\n╠➥ *wa.me/628998245333*\n╚═══════════════════\n\n*Ntar di Save Back Sama Owner Sy*\n\n*『 GNS_BOT 』*')
} else if (m.text.toLowerCase().includes('shalom')) {
m.reply('Shalom')
} else if (m.text.toLowerCase().includes('lamsar')) {
m.reply('OPEN MURID SESI BY NEXUS STORE!!! APN + TUTOR JIBUN!! BAWA DANA 10 K AE!!\nhttp://wa.me/6285362893068?text=bang+mau+jadi+murid')
}
  return true
}

module.exports = handler