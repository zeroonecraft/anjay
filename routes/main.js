__path = process.cwd()

var { performance } = require('perf_hooks');
var fetch = require('node-fetch');
var express = require('express');

router.get('/', (req, res) => {
  res.sendFile(__path + '/views/home.html')
  
const { runtime,fetchJson } = require('./lib/myfunc')
})

router.get('/runtime', (req, res) => {
	 res.json({
	   status: true,
	   creator: `${creator}`,
	   runtime: runtime(process.uptime()),
	})
})

router.get('/api', (req, res) => {
  res.sendFile(__path + '/views/docs.html')
})
module.exports = router