__path = process.cwd();

require ('../settings.js')
var express = require('express');
var axios = require('axios');
var qs = require('qs');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var router  = express.Router();
var creator = global.creator
const listkey = global.apikey

const zero = require("../lib/text")
const scr = require ('@bochilteam/scraper')
const { color, bgcolor } = require(__path + '/lib/color.js');
const { fetchJson } = require(__path + '/lib/fetcher.js')
const options = require(__path + '/lib/options.js');
const { getBuffer } = require(__path + '/lib/functions.js');
const oxy = require(__path + '/lib/oxy.js');

var {
	Vokal,
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');

_ = require('lodash')

loghandler = {
	noapikey:{
		status: 403,
        message: '[!] Masukkan parameter apikey',
        maintanied_by: `${creator}`
    },
    error: {
        status: 503,
        message: '[!] Service Unavaible, Sedang dalam perbaikan',
        maintanied_by: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: '[!] Forbiden, Invalid apikey',
    	maintanied_by: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: '[!] Forbiden, Invlid url, masukkan parameter url',
      maintanied_by: `${creator}`
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Apriliya-Putri-Fatmawati'+'LOLI--KILLERS';
        
router.get('/cekapikey', async (req, res, next) => {
	var apikey = req.query.apikey
	if(!apikey) return res.json(loghandler.noapikey)
	if(listkey.includes(apikey)){
		res.json({
			apikey: apikey,
status: true,
limit: 'unlimited'
		})
		} else {
			res.json(loghandler.apikey)
			}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Cecan  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/cecan/china', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/china.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/cecan/vietnam', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/vietnam.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/cecan/thailand', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/thailand.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/cecan/indonesia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/sgYy39Yy/1.jpg","https://i.postimg.cc/k5wmbJYp/10.jpg","https://i.postimg.cc/XJJ0KRT7/11.jpg","https://i.postimg.cc/PfCCT9Pj/12.jpg","https://i.postimg.cc/GpbRt8KD/13.jpg","https://i.postimg.cc/gkRr6hVt/14.jpg","https://i.postimg.cc/rsRX3SVB/15.jpg","https://i.postimg.cc/52S0sMkw/16.jpg","https://i.postimg.cc/tTY4RnR5/17.jpg","https://i.postimg.cc/4d7XRCw2/18.jpg","https://i.postimg.cc/k55nwRSm/19.jpg","https://i.postimg.cc/QCcsVp2p/2.jpg","https://i.postimg.cc/zGz5XH0g/20.jpg","https://i.postimg.cc/y8LKJ6br/21.jpg","https://i.postimg.cc/WbjcXJRH/22.jpg","https://i.postimg.cc/m2wfq2B2/23.jpg","https://i.postimg.cc/MGghRnbt/24.jpg","https://i.postimg.cc/1t6bKyvS/25.jpg","https://i.postimg.cc/fyNp21P9/26.jpg","https://i.postimg.cc/J05g9Pwd/27.jpg","https://i.postimg.cc/m2TKQfCx/28.jpg","https://i.postimg.cc/MKtN5Pmn/29.jpg","https://i.postimg.cc/PxGRJBTR/3.jpg","https://i.postimg.cc/cHQ5nXJ4/30.jpg","https://i.postimg.cc/bY9BYCMm/31.jpg","https://i.postimg.cc/QdH4bXMz/32.jpg","https://i.postimg.cc/Rhgd78x9/33.jpg","https://i.postimg.cc/sD2wjV52/34.jpg","https://i.postimg.cc/pXV1mQMR/35.jpg","https://i.postimg.cc/sfmTCBQ8/36.jpg","https://i.postimg.cc/ZRcxmgR3/37.jpg","https://i.postimg.cc/mkgNgwzn/38.jpg","https://i.postimg.cc/pXyJNsth/4.jpg","https://i.postimg.cc/13q0X4Xy/5.jpg","https://i.postimg.cc/DZBLHXjP/7.jpg","https://i.postimg.cc/RhYfVzz3/8.jpg","https://i.postimg.cc/TYZmzG9F/9.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/jpg');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/korea', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/K87Z4CkB/p-19620motq1.jpg","https://i.postimg.cc/wvgR7hjT/p-19623vybj1.jpg","https://i.postimg.cc/QtJ5bfyT/p-19623z95r1.jpg","https://i.postimg.cc/XJbddRQW/p-19624y1on1.jpg","https://i.postimg.cc/dVG0rLX7/p-19625anrs1.jpg","https://i.postimg.cc/9fWc91ZS/p-19625lzea1.jpg","https://i.postimg.cc/SKWzSZqv/p-19626rftx1.jpg","https://i.postimg.cc/hPjxLbbX/p-196298pkr1.jpg","https://i.postimg.cc/hvGJ0cmk/p-1962alh5c1.jpg","https://i.postimg.cc/ZqcKsXJ4/p-1962asjl31.jpg","https://i.postimg.cc/pX6jqhqq/p-1962enqpe1.jpg","https://i.postimg.cc/T1SPqmfb/p-1962gl6nf1.jpg","https://i.postimg.cc/mZVC16Mx/p-1962koqm41.jpg","https://i.postimg.cc/d3zqTYjm/p-1962pvq221.jpg","https://i.postimg.cc/3xQ883R3/p-1962spcdo1.jpg","https://i.postimg.cc/BbZFw2rw/p-1962u3qhb1.jpg","https://i.postimg.cc/nVwMJ8BL/p-1962umwai1.jpg","https://i.postimg.cc/76hDs6Bn/p-1962y8lij1.jpg","https://i.postimg.cc/ydp6s9JG/p-1962yt9ph1.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/jpg');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/japan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/RCcjLvF6/p-196252lk91.jpg","https://i.postimg.cc/7hMdHncM/p-19625eppj1.jpg","https://i.postimg.cc/CLpwwvZD/p-19629cg431.jpg","https://i.postimg.cc/pVwLpWSm/p-19629eev81.jpg","https://i.postimg.cc/ydxwTRD7/p-1962cau3w1.jpg","https://i.postimg.cc/D0LFqGN8/p-1962ck87p1.jpg","https://i.postimg.cc/76zjcknR/p-1962fyik51.jpg","https://i.postimg.cc/bYtzcXvp/p-1962i85aq1.jpg","https://i.postimg.cc/nLWtgTbX/p-1962nvj4g1.jpg","https://i.postimg.cc/rFGMsSWH/p-1962o5sp41.jpg","https://i.postimg.cc/wTgnWnyW/p-1962p9nlk1.jpg","https://i.postimg.cc/T1XBv4k3/p-1962q7ura1.jpg","https://i.postimg.cc/nz6pj20y/p-1962qiubc1.jpg","https://i.postimg.cc/13CxVMzv/p-1962tt38s1.jpg","https://i.postimg.cc/ZYBqbBwk/p-1962ufc7p1.jpg","https://i.postimg.cc/52x1C6S2/p-1962vn5rc1.jpg","https://i.postimg.cc/GpHWFY8d/p-1962vpyp71.jpg","https://i.postimg.cc/tTc8vg6W/p-1962w2hyp1.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/jpg');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/malaysia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
         var data = ["https://i.postimg.cc/L8BFTfV1/p-1962mt0wq1.jpg","https://i.postimg.cc/SKgF0h3Q/p-1962p3bmk1.jpg","https://i.postimg.cc/25tYbYwc/p-1962pac7k1.jpg","https://i.postimg.cc/fRXRhJfz/p-1962qpsvb1.jpg","https://i.postimg.cc/Yq7Hmb6H/p-1962rcc7k1.jpg","https://i.postimg.cc/G3QDZSh7/p-1962v04461.jpg","https://i.postimg.cc/6QttJzQc/p-1962va89q1.jpg","https://i.postimg.cc/t4HHWDFb/p-1962y8nl71.jpg","https://i.postimg.cc/02VB2fZZ/p-1962y8oif1.jpg","https://i.postimg.cc/CMqh8R9j/p-1962yyuuh1.jpg","https://i.postimg.cc/Hn7f77xj/p-19622gld51.jpg","https://i.postimg.cc/Hnpyrb39/p-196240q3o1.jpg","https://i.postimg.cc/wMGj9Nrv/p-19624pvv61.jpg","https://i.postimg.cc/hPXGpCJ7/p-19625n89w1.jpg","https://i.postimg.cc/TwQPHFqn/p-19627bm3c1.jpg","https://i.postimg.cc/zG08NKR1/p-1962c7n2o1.jpg","https://i.postimg.cc/j2XkfQTx/p-1962caiz61.jpg","https://i.postimg.cc/59TJNf06/p-1962csdwa1.jpg","https://i.postimg.cc/6pwptBjC/p-1962d0xml1.jpg","https://i.postimg.cc/PqyhtZpj/p-1962d4cuh1.jpg","https://i.postimg.cc/DZYTGTPp/p-1962grit21.jpg","https://i.postimg.cc/T1LXq4kd/p-1962zgkj21.jpg"]
         var result = data[Math.floor(Math.random() * data.length)];
         var requestSettings = {
      url: result,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/jpg');
      res.send(body);
   });
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cecan/random', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://github.com/zeroonecraft/data-gabut/raw/main/cecan/random.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Downloader  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/download/facebook', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
        if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter url"})
        if(listkey.includes(apikey)){
        const result = await scr.savefrom(url)
             res.json({
                 result
             })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/instagram', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter username"})
        if(listkey.includes(apikey)){
       let iglu = await scr.instagramdl(url).catch(async _ => await scr.instagramdlv2(url)).catch(async _ => await scr.instagramdlv3(url)).catch(async _ => await scr.instagramdlv4(url))
		var result = iglu;
		res.json({
			result
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.q
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter q"})
        if(listkey.includes(apikey)){
       scr.pinterest(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/tiktok', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter url"})
        if(listkey.includes(apikey)){
       let ttlu = await scr.tiktokdl(url).catch(async _ => await scr.tiktokdlv2(url))
		var result = ttlu;
		res.json({
			result
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/download/ytmp3', async (req, res, next) => {
          var apikey = req.query.apikey
          var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter url"})
        if(listkey.includes(apikey)){
const { id, thumbnail, audio: _audio, title } = await scr.youtubedlv2(url)
try {
for (let i in _audio) {
audio = _audio[i]
let kin = await audio.download()
		res.json({
			id: id,
			thumbnail: thumbnail,
			title: title,
			size: audio.fileSize,
			download: kin
})
		}} catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

router.get('/download/ytmp4', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.url
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter url"})
        if(listkey.includes(apikey)){
       const { id, thumbnail, video: _video, title } = await scr.youtubedlv2(url)
try{
for (let i in _video) {
video = _video[i]
let kin = await video.download()
		res.json({
			id: id,
			thumbnail: thumbnail,
			title: title,
			size: video.fileSize,
			download: kin
		})
		}} catch {
         	console.log(e);
         	res.json(loghandler.error)
}
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Text Pro  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/textpro/pencil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/glitch', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/blackpink', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/berry', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/neon', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/logobear', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/3dchristmas', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/thunder', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/3dboxtext', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/glitch2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var textbesar = req.query.textbesar
       	var textkecil = req.query.textkecil
        if(!textbesar) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text besar"})
        if(!textkecil) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text kecil"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [textbesar,textkecil])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/glitchtiktok', async (req, res, next) => {
          var apikey = req.query.apikey
       	var textbesar = req.query.textbesar
       	var textkecil = req.query.textkecil
        if(!textbesar) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text besar"})
        if(!textkecil) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text kecil"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [textbesar,textkecil])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/video-game-classic', async (req, res, next) => {
          var apikey = req.query.apikey
       	var textbesar = req.query.textbesar
       	var textkecil = req.query.textkecil
        if(!textbesar) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text besar"})
        if(!textkecil) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text kecil"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [textbesar,textkecil])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/marvel-studios', async (req, res, next) => {
          var apikey = req.query.apikey
       	var textbesar = req.query.textbesar
       	var textkecil = req.query.textkecil
        if(!textbesar) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text besar"})
        if(!textkecil) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text kecil"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [textbesar,textkecil])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/ninja-logo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var textbesar = req.query.textbesar
       	var textkecil = req.query.textkecil
        if(!textbesar) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text besar"})
        if(!textkecil) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text kecil"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-ninja-logo-online-935.html", [textbesar,textkecil])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/green-horror', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/magma', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/3d-neon-light', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/3d-orange-juice', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/chocolate-cake', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/textpro/strawberry', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       zero.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Cek ID Game  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/cekidgame/ff1', async (req, res, next) => {
          var apikey = req.query.apikey
       	var uid = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!uid) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.gifan.id/trueID/freeFire/?id=${uid}`))
        .then(response => response.text())
        .then(data => {
        var nickname = data;
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result: {
                nickname
              }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/cekidgame/ff2', async (req, res, next) => {
          var apikey = req.query.apikey
       	var id = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
        if(!id) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id"})
        if(listkey.includes(apikey)){
       scr.nameFreeFire(id)
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/cekidgame/ml', async (req, res, next) => {
          var apikey = req.query.apikey
       	var uid = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!uid) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id", format : "userID.zoneID"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.gifan.id/trueID/mobileLegends/?id=${uid}`))
        .then(response => response.text())
        .then(data => {
        var nickname = data;
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result: {
                nickname
              }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/cekidgame/aov', async (req, res, next) => {
          var apikey = req.query.apikey
       	var uid = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!uid) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.gifan.id/trueID/aov/?id=${uid}`))
        .then(response => response.text())
        .then(data => {
        var nickname = data;
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result: {
                nickname
              }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/cekidgame/hd', async (req, res, next) => {
          var apikey = req.query.apikey
       	var uid = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!uid) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.gifan.id/trueID/higgsDomino/?id=${uid}`))
        .then(response => response.text())
        .then(data => {
        var nickname = data;
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result: {
                nickname
              }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

router.get('/cekidgame/rgn-x', async (req, res, next) => {
          var apikey = req.query.apikey
       	var uid = req.query.id
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!uid) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter id"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.gifan.id/trueID/ragnarok-x/?id=${uid}`))
        .then(response => response.text())
        .then(data => {
        var nickname = data;
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result: {
                nickname
              }
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  News  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/news/cnn', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/cnbc', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/republika', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/tempo', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter type", list_type : "nasional - bisnis - metro - dunia - bola - sport - cantik - tekno - otomotif - nusantara"})      
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bintang 1302',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/antara', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!url) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter type", list_type : "terkini - top-news - politik - hukum - ekonomi - metro - sepakbola - olahraga - humaniora - lifestyle - hiburan - dunia - infografik - tekno - otomotif - warta-bumi - rilis-pers"})
       if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news/${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bintang 1302',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/news/kumparan', async (req, res, next) => {
          var apikey = req.query.apikey
       	var url = req.query.type
       	if(!apikey) return res.json(loghandler.noapikey)
         if(listkey.includes(apikey)){
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bintang 1302',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Kata  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/kata/bucin', async (req, res, next) => {
  var apikey = req.query.apikey
 if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
const result = await scr.bucin()
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/kata/dare', async (req, res, next) => {
  var apikey = req.query.apikey
 if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
const result = await scr.dare()
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/kata/truth', async (req, res, next) => {
  var apikey = req.query.apikey
 if(!apikey) return res.json(loghandler.noapikey)
if(listkey.includes(apikey)){
const result = await scr.truth()
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Gambar  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/gambar/cyberspace', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/cyberspace.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/gambar/game', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/game.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/gambar/islamic', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/islamic.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/gambar/mountain', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/mountain.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/gambar/programming', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/programming.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})
router.get('/gambar/technology', async (req, res, next) => {
        var apikey = req.query.apikey
             var text = req.query.page
             if(!apikey) return res.json(loghandler.noapikey)
      if(listkey.includes(apikey)){
     fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/gambar/technology.json`))
      .then(response => response.json())
      .then(data => {
      var result = data;
      var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
    url: result.url,
    method: 'GET',
    encoding: null
 };
 request(requestSettings, function(error, response, body) {
    res.set('Content-Type', 'image/jpg');
    res.send(body);
 });
 })
} else {
res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Photooxy  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/photooxy/flaming', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})      
         if(listkey.includes(apikey)){
       oxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/shadow-sky', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})      
         if(listkey.includes(apikey)){
       oxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/metallic', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})      
         if(listkey.includes(apikey)){
       oxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/naruto', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text"})      
         if(listkey.includes(apikey)){
       oxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/photooxy/pubg-mobile', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.text
       var text2 = req.query.text
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text || !text2) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter text & text2"})      
         if(listkey.includes(apikey)){
       oxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Information  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/information/github-stalk', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.username
       	if(!apikey) return res.json(loghandler.noapikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter username"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://api.github.com/users/${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'Bintang 1302',
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/information/jadwalsholat', async (req, res, next) => {
  var apikey = req.query.apikey
  var kota = req.query.kota
 if(!apikey) return res.json(loghandler.noapikey)
if (!kota) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter kota"})
if(listkey.includes(apikey)){
const result = await scr.jadwalsholat(kota)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/information/jadwaltv', async (req, res, next) => {
  var apikey = req.query.apikey
  var channel = req.query.channel
 if(!apikey) return res.json(loghandler.noapikey)
if (!channel) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter channel"})
if(listkey.includes(apikey)){
const result = await scr.jadwalTV(channel)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/information/kodepos', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kota
       	if(!apikey) return res.json(loghandler.noapikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter kota"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/information/covid-world', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/information/gempa', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
        const result = await scr.gempa()
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
} else {
  res.json(loghandler.apikey)
}
})
router.get('/information/gempanow', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
        const result = await scr.gempaNow()
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
} else {
  res.json(loghandler.apikey)
}
})
router.get('/information/tsunami', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
        const result = await scr.tsunami()
             res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Search  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/search/google-image', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.googleImage(text).then(data => {
        var data = data;
             res.json({
             	status: 200,
             	data,
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/wallpaper', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.wallpaper(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/search/pinterest', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.query
       	if(!apikey) return res.json(loghandler.noapikey)
       if (!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter query"})      
         if(listkey.includes(apikey)){
       scr.pinterest(text)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Nefw  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/nsfw/ahegao', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ahegao.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/ass', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ass.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/bdsm', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/bdsm.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/blowjob', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/blowjob.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/cuckold', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/cuckold.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/cum', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/cum.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/eba', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/eba.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/ero', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/ero.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/femdom', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/femdom.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/foot', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/foot.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/gangbang', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/gangbang.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/gifs', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/gifs.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/glasses', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/glasses.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/hentai', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/hentai.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/hentaivid', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/hentaivid.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'video/mp4');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/jahy', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/jahy.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/manga', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/manga.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/masturbation', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/masturbation.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/neko', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/neko.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/neko2', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/neko2.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/nsfwloli', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/nsfwloli.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/orgy', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/orgy.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/panties', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/panties.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/pussy', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/pussy.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/tentacles', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/tentacles.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/thighs', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/thighs.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/yuri', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/yuri.json`))
  .then(response => response.json())
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

router.get('/nsfw/zettai', async (req, res, next) => {
    var apikey = req.query.apikey
     var text = req.query.page
     if(!apikey) return res.json(loghandler.noapikey)
  if(listkey.includes(apikey)){
 fetch(encodeURI(`https://raw.githubusercontent.com/zeroonecraft/data-gabut/main/nsfw/zettai.json`))
  .then(data => {
  var result = data;
  var result = data[Math.floor(Math.random() * data.length)];
var requestSettings = {
url: result.url,
method: 'GET',
encoding: null
};
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/jpg');
res.send(body);
});
})
} else {
res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Primbon  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/primbon/artimimpi', async (req, res, next) => {
  var apikey = req.query.apikey
  var mimpi = req.query.mimpi
 if(!apikey) return res.json(loghandler.noapikey)
if (!mimpi) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter mimpi"})
if(listkey.includes(apikey)){
const result = await scr.artimimpi(mimpi)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
       .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
res.json(loghandler.apikey)
}
})
router.get('/primbon/nomorhphoki', async (req, res, next) => {
  var apikey = req.query.apikey
  var number = req.query.number
 if(!apikey) return res.json(loghandler.noapikey)
if (!number) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter nomer hp"})
if(listkey.includes(apikey)){
const result = await scr.nomorhoki(number)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
      result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/primbon/zodiac', async (req, res, next) => {
  var apikey = req.query.apikey
  var dates = req.query.dates
  var months = req.query.months
 if(!apikey) return res.json(loghandler.noapikey)
if (!dates) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter tanggal"})
if (!months) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter bulan"})
if(listkey.includes(apikey)){
const result = await scr.getZodiac(months, dates)
     res.json(
         result
     )
} else {
res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Islamic  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/islam/tahlil', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/wirid', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/ayatkursi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/doaharian', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/bacaanshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatshalat', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/kisahnabi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/asmaulhusna', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatsubuh', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatzuhur', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatmagrib', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatisya', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/islam/niatashar', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.page
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://raw.githubusercontent.com/zeeone-ofc/My-SQL-Results/master/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Game  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/game/asahotak', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.asahotak()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/caklontong', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.caklontong()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/family100', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.family100()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/siapakahaku', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.siapakahaku()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/susunkata', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.susunkata()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakbendera', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakbendera()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakgambar', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakgambar()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakkabupaten', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakkabupaten()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakkata', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakkata()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebakkimia', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebakkimia()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebaklirik', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebaklirik()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tebaktebakan', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tebaktebakan()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/game/tekateki', async (req, res, next) => {
          var apikey = req.query.apikey
       	if(!apikey) return res.json(loghandler.noapikey)
        if(listkey.includes(apikey)){
       scr.tekateki()
	.then(data => {
		var result = data;
		res.json({
             	status: 'true',
             	author: 'Bintang 1302',
              result
             })
		})
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})

//―――――――――――――――――――――――――――――――――――――――――― ┏  Other  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\
router.get('/other/hilih', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.noapikey)
        if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/kbbi', async (req, res, next) => {
          var apikey = req.query.apikey
       	var text = req.query.kata
       	if(!apikey) return res.json(loghandler.noapikey)
       if(!text) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter kata"})
        if(listkey.includes(apikey)){
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json(loghandler.error)
})
} else {
  res.json(loghandler.apikey)
}
})
router.get('/other/lyrics', async (req, res, next) => {
  var apikey = req.query.apikey
  var query = req.query.query
 if(!apikey) return res.json(loghandler.noapikey)
if (!query) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter nama lagu"})
if(listkey.includes(apikey)){
const result = await scr.lyrics(query)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
       result
     })
} else {
res.json(loghandler.apikey)
}
})
router.get('/other/chord', async (req, res, next) => {
  var apikey = req.query.apikey
  var query = req.query.query
 if(!apikey) return res.json(loghandler.noapikey)
if (!query) return res.json({ status : false, creator : `${creator}`, message : "[!] Masukan parameter nama lagu"})
if(listkey.includes(apikey)){
const result = await scr.chord(query)
     res.json({
       status: 'true',
       author: 'Bintang 1302',
       result
     })
} else {
res.json(loghandler.apikey)
}
})

module.exports = router
