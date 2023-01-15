var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var apirouter = require('./routes/api')
var app = express()
var favicon = require('serve-favicon')
var path = require('path')
const { runtime,fetchJson } = require('./lib/myfunc')
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))
app.use(favicon(path.join(__dirname,'favicon.ico')))

app.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})
app.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
app.get('/getkey', (req, res) => {
    res.sendFile(__path + '/views/getkey.html')
})
app.get('/yourkey', (req, res) => {
    res.sendFile(__path + '/views/key.html')
})
app.use('/api', apirouter)

app.get('/runtime', (req, res) => {
	 res.json({
	   status: true,
	   creator: `${creator}`,
	   runtime: runtime(process.uptime()),
	})
})

app.listen(PORT, () => {
   //console.clear();
   console.log(`
   
	 ██████╗ ███████╗███████╗████████╗ █████╗ ██████╗ ██╗
	 ██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██║
	 ██████╔╝█████╗  ███████╗   ██║   ███████║██████╔╝██║
	 ██╔══██╗██╔══╝  ╚════██║   ██║   ██╔══██║██╔═══╝ ██║
	 ██║  ██║███████╗███████║   ██║   ██║  ██║██║     ██║
	 ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝
                                          Make by Bintang1302`)
})

module.exports = app
