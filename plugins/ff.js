let handler = async m => m.reply(`
╔═════❀ ❬ *DM FF* ❭ ❀══════╗
╠-𖥻ꦼꦽ➳ *List Dm FF :*
╠➪*HARGA DM FREE FIRE*
║    *(STOCK UNLIMITED)*
╠➥ *5 💎 Rp 1.000*
╠➥ *20 💎 Rp 3,980*
╠➥ *50 💎 Rp 7.880*
╠➥ *70  💎Rp 10.000*
╠➥ *100 💎 Rp 14.600*
╠➥ *140 💎Rp 19,600*
╠➥ *210 💎 Rp 29.000*
╠➥ *355 💎Rp 47.850*
╠➥ *425 💎 Rp 57.000*
╠➥ *500 💎 Rp 67.000*
╠➥ *720 💎Rp 94,400*
╠➥ *1000 💎 Rp. 132.000*
╠➥ *1440 💎 Rp. 187.000*
╠➥ *2000💎 Rp. 253.000*
╠➥ *4000💎 Rp. 510.000*
║
╠➥ *Membership Mingguan : 29,500*
╠➥ *Membership Bulanan : 113,800*
╚═════════════════════╝

*Order Via WA :*
*wa.me/628998245333*
*Pembayaran Via OVO :*
*08998245333*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ff']
handler.tags = ['dm']
handler.command = /^ff$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler
