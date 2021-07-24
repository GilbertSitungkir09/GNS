let handler = async m => m.reply(`
┏━━°❀❬ *TQTO DEV API* ❭❀°━━┓
┣➥ *Bany :* https://api-self.herokuapp.com 
┣➥ *Videfikri:* https://videfikri.com/
┣➥ *Caliph:* https://recoders-area.herokuapp.com/
┣➥ *Zeks:* https://api.zeks.xyz/api/
┣➥ *lays:* https://leyscoders-api.herokuapp.com/
┣➥ *Zahir:* https://zahirr-web.herokuapp.com/
┃ 「 *Pesan Dari My Owner* 」
┃ > *Trimakasih Telah Membantu*
┃ *Jalanya Bot Ini :')*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['websetapi']
handler.tags = ['info']
handler.command = /^websetapi$/i

module.exports = handler
