let handler = async m => m.reply(`
╔══°❀❬ *Buy Premium* ❭❀°══
║ 
╠➥ *Keuntungan :*
╠➥ *Limit Tidak Terbatas!*
╠➥ *Fitur Premium Dapat Digunakan!*
╠➥ *Dapat Menambahkan Bot Ke Grup!*
║
╠➥ *Bonus :*
╠➥ Diberikan Kode Gift Seminggu!
║
╠➥ *Harga :*
╠➥ 15K / Bulan (4 Minguu)
╠➥ 50K / Tahun (12 Bulan)
╠➥ 100K / VIP (Permanen)
║
╠➥ *Pembayaran :*
╠-𖥻ꦼꦽ➳ *3:* [0899-8245-333]
╠-𖥻ꦼꦽ➳ *Dana:* [0899-8245-333]
╠-𖥻ꦼꦽ➳ *Ovo:* [0899-8245-333]
╚══════════════════
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^(premium)$/i

module.exports = handler
