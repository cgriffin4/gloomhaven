var express = require('express')
var app = express()
// … Configure Express, and register necessary route handlers
app.use(express.static('client'))
srv = app.listen(8091)
app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))