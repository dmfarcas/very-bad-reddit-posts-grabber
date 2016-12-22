const express = require('express')
const app = express()
const cheerio = require('cheerio')
const request = require('request')

app.get('/', function (req, res) {
  let html = request('http://www.reddit.com/r/romania', (e, r, b) => { //is this an api
    let $ = cheerio.load(b)
    let π = cheerio.load(`
        <html>
        <head>
        <title> Reddit Romania </title>
        </head>
        <body>
        </body>
        </html>
      `)

    $('.thing').each((i, e) => {
      π('body').append(e)
    })

    res.send(π.html())
  })
})

app.listen(3000)
