let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `『 Donasi • Pulsa 』

• *Ovo:* 08998245333
• *Telkomsel:* 082183686717
• *3:* 08998245333

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/gilbert_situngkir09

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '628998245333', 'OWNER GNS >_<', idnya)
  }
  return true
}

module.exports = handler
