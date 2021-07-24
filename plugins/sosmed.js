let handler = async m => m.reply(`
╔════❀ ❬ SOSMED ❭ ❀═══════╗
║
╠══❀ ❬ *OWNER* ❭ ❀══
╠➪ *WA : wa.me/628998245333*
╠➪ *IG : https://bit.ly/3eHTz26*
╠➪ *YT: https://bit.ly/2Rh2KxG*
╠➪ *TikTok: https://bit.ly/3hknYFA* 
╠➪ *FB: Gilbert Noel Situngkir*
╠═════════════════════╝
║
╠══❀ ❬ *Bot* ❭ ❀══
╠➪ *WA : wa.me/6289626352296*
╠➪ *IG : https://bit.ly/3w0JdAO*
╠═════════════════════╝
║
╠══❀ ❬ *KRISTIN* ❭ ❀══
╠➪ *IG : https://bit.ly/2TCgSSU*
╠➪ *FB : https://bit.ly/3clLsH2*
╚═════════════════════╝

*Untuk Yang Mau Sosmed Nya di Tambahin Ke Sini Chat Owner*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sosmed']
handler.tags = ['info']
handler.command = /^sos(med|ial)$/i

module.exports = handler
