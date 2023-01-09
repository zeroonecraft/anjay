const fs = require('fs')

global.creator = 'Bintang 1302' 
global.apikey = ["aMFrJymkaMFrJymk", "kqNaNypkqNaNyp", "aMFrJymkkqNaNyp", "kqNaNypaMFrJymk", "Y"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
