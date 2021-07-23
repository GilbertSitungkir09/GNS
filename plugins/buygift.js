let handler = async m => m.reply(`
╔═════❀ ❬ BUY GIFT CODE ❀═══
║ 
╠═══❀ ❬ Keterangan ❭ ❀════
║• Fitur Gift adalah fitur kode yang berisi
║hadiah! Anda bisa mendapatkan exp
║Maupun limit sepuasnya!
║Hingga masa berlaku kodegiftnya habis!
╠═════════════════════╝
║
╠═══❀ ❬ Harga ❭ ❀════
╠➥ 5K / Minggu (7 Hari)
╠➥ 15K / Bulan (4 Minggu)
╠➥ 30K / VIP (Permanen)
╠═══════════════════╝
║
╠═══❀ ❬ Pembayaran ❭ ❀════
╠➥ Saweria :
╠➪https://saweria.co/gilbertsitungkir
╠➥ *Ovo:* [0899-8245-333]
╠➥ *Dana:* [0899-8245-333]
╠➥ *Pulsa* (TRI) :
╠➪ *+628998245333*
╚═════════════════════╝
`.trim()) // Tambah sendiri kalo mau
handler.help = ['buygift']
handler.tags = ['hadiah']
handler.command = /^(buygift)$/i

module.exports = handler
