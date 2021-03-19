// imports
const express = require('express')
const app = express()
const port = 3000

// static Files
app.use(express.static('public'))
app.use('/html',express.static(__dirname + '/html'))
app.use('/jpg',express.static(__dirname + '/jpg'))

app.get('', (req,res) => {
    res.sendFile(__dirname + '/index.html')
    
})

// Listeen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))
