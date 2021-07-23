let handler = async m => m.reply(`
╔═══❀ ❬ *Chip Domino* ❭ ❀═══╗
╠-𖥻ꦼꦽ➳ *Chip Higgs Domino :*
║  *❬Chip Ungu / Md Higgs Domini❭*
╠➥ *1 M Chip Rp 500*
╠➥ *60 M Chip Rp 7.500*
╠➥ *200 M Chip Rp 19.000*
╠➥ *400 M Chip Rp 37.000*
╠➥ *1 B Chip Rp 70.000*
╠➥ *2 B Chip Rp 140.000*
║
╠➥ *NOTE :*
╠➪*Jika Id Yang Anda Kirim Salah*
║ *Maka Kami Tdk Bertanggung jawab.*
╚═════════════════════╝

*Order Via WA :*
*wa.me/628998245333*
*Pembayaran Via OVO :*
*08998245333*
⏰ OPEN 12.00-19.00 WIB
⏳ PROSES 5-10 MENIT
      MAX 24 JAM
🎮 VIA ID
📦 STATUS READY ✅
`.trim()) // Tambah sendiri kalo mau
handler.help = ['domino', 'chiphiggs']
handler.tags = ['dm']
handler.command = /^(chip(higgs)?(higgsdomino)?|domino)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler
