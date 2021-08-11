//apikey bisa beli langsung ke dev xteam/bisa beli lewat perantara gilbert
//Wa Gilbert : 08998245333
global.owner = ['628998245333','6281934238364'] // Put your number here
global.mods = ['628998245333','6289626352296'] // Want some help?
global.prems = ['628998245333','6282183686717','6289626352296'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  clph: 'https://recoders-area.caliph.repl.co',
  nrtm: 'https://nurutomo.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  leys: 'https://leyscoders-api.herokuapp.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
}
global.APIKeys = { // APIKey Here
  'https://api.lolhuman.xyz': 'ae0203a82508964d6fb9d7df',
  'https://api.xteam.xyz': 'MIMINETBOT',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://bsbt-api-rest.herokuapp.com': 'benniismaelapikey',
}

// Sticker WM
global.packname = 'Situngkir Ni Boss'
global.author = 'Lord TungkirðŸ˜Ž'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
