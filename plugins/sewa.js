let handler = async m => m.reply(`
╔═══°❀❬ *Sewa Bot* ❭❀°═══
║
╠-𖥻ꦼꦽ➳ *List Sewa Bot GNS :*
╠➥ 10K / Bulan (4 Minguu)
╠➥ 40K / Tahun (12 Bulan)
╠➥ 90K / VIP (Permanen)
║
╠➥ *Pembayaran :*
╠-𖥻ꦼꦽ➳ *3:* [0899-8245-333]
╠-𖥻ꦼꦽ➳ *Ovo:* [0899-8245-333]
╚══════════════════
*Note: Jika Ingin Sewa Bot GNS, Chat Owner Saya.*
*Untuk Mendapatkan Kontak Owner Ketik* #owner

_Pembayaran Via Pulsa Ditambah Biaya Admin Sebesar 7K_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler
