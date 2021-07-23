let handler = async m => m.reply(`
╔═════❀ ❬ *Format ML* ❭ ❀═════╗
╠-𖥻ꦼꦽ➳ *FORMAT ML* :
╠➥ *Nickname :*
╠➥ *ID :*
╠➥ *Server :*
╠➥ *ORDER :__ Dm*
╠➥ *SISA DM : __Dm*
║
╠➥ *KESALAHAN DALAM MENGISI*
║*FORMAT BUKAN TANGGUNG JAWAB KAMI!*
╚═════════════════════╝
`.trim()) // Tambah sendiri kalo mau
handler.help = ['formatml']
handler.tags = ['dm']
handler.command = /^formatml$/i

module.exports = handler
