let handler = async m => m.reply(`
╔═══❀ ❬ *YouTube Premium* ❭ ❀═══╗
╠-𖥻ꦼꦽ➳ *YouTube Prem :*
╠➥ *1 Bulan = Rp 10.000,-*
║
╠➪ *Kelebihannya :*
╠➥ *No Ads*
╠➥ *Minimize*
╠➥ *Lock Screen Tetap Berjalan*
╠➥ *Include Youtube Music Premium*
╠➥ *Youtube Original*
║
╠➪ *Format Pengisian :*
╠➥ *Email :*
║
╠➥ *NOTE : Jika Email anda bermasalah*
║   *Gunakan Email yang lain.*
╚═════════════════════╝

*Order Via WA :*
*wa.me/628998245333*
*Pembayaran Via OVO :*
*08998245333*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ytprem']
handler.tags = ['dm']
handler.command = /^ytprem$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler
