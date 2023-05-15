const express = require('express')
const app = express()
const path = require('path')

app.get('/', (_req, res) => {
  res.send('<!DOCTYPE html><html><body><video id="player"></video><script src="/bundle.js"></script></body></html>')
})
app.get('/bundle.js', (_req, res) => {
  res.type('js')
  res.sendFile(path.join(__dirname, 'bundle.js'))
})
app.listen(3000)
