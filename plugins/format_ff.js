let handler = async m => m.reply(`
╔═════❀ ❬ *Format FF* ❭ ❀═════╗
╠-𖥻ꦼꦽ➳ *FORMAT FREE FIRE* :
╠➥ *ID :*
╠➥ *Nickname :*
╠➥ *ORDER :__ Dm*
╠➥ *SISA DM : __Dm*
║
╠➥ *KESALAHAN DALAM MENGISI*
║*FORMAT BUKAN TANGGUNG JAWAB KAMI!*
╚═════════════════════╝
`.trim()) // Tambah sendiri kalo mau
handler.help = ['formatff']
handler.tags = ['dm']
handler.command = /^formatff$/i

module.exports = handler
