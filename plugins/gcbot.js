let handler = async m => m.reply(`
*⚠GRUP BOT⚠*

*1. https://bit.ly/35KqDBs*
*2. https://bit.ly/3ql2URR*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
