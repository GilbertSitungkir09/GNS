let handler = async m => m.reply(`
╔═════❀ ❬ DONASI ❭ ❀══════╗
╠-𖥻ꦼꦽ➳ SAWERIA :
╠➪https://saweria.co/gilbertsitungkir
╠➥ *3:* [0899-8245-333]
╠➥ *Ovo:* [0899-8245-333]
╠➥ *Dana:* [0899-8245-333]
╠➥ *Telkomsel* [0821-2251-7136]
╚═════════════════════╝
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
