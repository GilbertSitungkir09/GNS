const axios = require('axios')
const cheerio = require('cheerio')

const newsCnn = async(genre) => {
const res = await axios.get(`https://www.cnnindonesia.com/${genre}`) 
const $ = cheerio.load(res.data)
const hasil = []
$('article').each(function(a, b) {
const link = $(b).find('a').attr('href')
const thumb = $(b).find('img').attr('src') 
const judul = $(b).find('img').attr('alt')
hasil.push({ judul, link, thumb })
}) 
return hasil
}

handler.help = ['cnn']
handler.tags = ['internet']
handler.command = /^(cnn)$/i

handler.register = true
module.exports = handler
