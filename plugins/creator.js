// By Gilbert
let handler = async function (m) {
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
        hehe = await this.sendMessage(m.chat, {
        "displayName": `${list.length} kontak`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: m })
        hehe.reply('Nih Kak OWNER ku\nKalo Mau Chat² Aja Tapi Jgn Spam Yh >_<\n*Awas Kalau kamu spam Nanti Aku Banned ^_^*')
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler