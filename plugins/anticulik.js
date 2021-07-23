let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {

idnya = await this.reply(m.chat, 'Jika Ingin Join Bot Ke grup Silahkan Ijin Owner Terlebih Dahulu', m)
this.sendContact(m.chat, '628998245333', 'Owner Tungkir', idnya)
  }
  return true
}

module.exports = handler