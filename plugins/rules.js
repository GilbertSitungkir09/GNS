let handler = async m => m.reply(`
╔══°❀❬ *PERATURAN BOT* ❭❀°══╗
║
╠➥ PERINGATAN :
╠➪ Telpon/VC = Blok
║ 
╠➥ BANNED SEMENTARA :
╠➪ SpamChat
╠➪ SpamCall
╠➪ Bacot/Hina Gak Jelas
║
╠➥ BANNED + BLOK PERMANEN :
╠➪ Merusak Nama Baik Bot
╠➪ Meniru/Menyalin Teks²
║     Pesan Pada Bot Tanpa Izin  
╠➪ Menyebarkan Kode Gift Kepada
║     Orang Lain
╚════════════════════

Note :
● Owner dapat sewaktu-waktu mengubah syarat ketentuan(rules) pada Bot ini,, demi menjaga kualitas Bot ini :)


End..
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
