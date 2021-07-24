let fetch = require('node-fetch')
let util = require('util')
let handler = async (m, { text }) => {
   let response = await fetch('https://api.vhtear.com'+ '/playstore?query=' + text + '&apikey=' + vkey)
			let	ppek = await response.json()
				let mek = ppek.result
				no = 0
				ve_ = "*Playstore*\n"
				for (var cg of mek) {
					no += 1
					ve_ += "\n\n" + no + ". AppID : " + cg.app_id
					ve_ += "\nAppID : " + cg.app_id
					ve_ += "\nUrl : https://play.google.com"+ cg.url
					ve_ += "\nTitle : " + cg.title
					ve_ += "\nDeveloper : " + cg.developer
					ve_ += "\nDescription : " + cg.description
				}
				await m.reply(ve_)
}
handler.help = ['playstore <pencarian>']
handler.tags = ['internet']
handler.command = /^(playstore|pstore)$/i

module.exports = handler