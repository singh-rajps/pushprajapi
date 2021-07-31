const express = require('express')
const morgan= require("morgan")
const API = require('./api/index')

const app = express()
const port = 3000
app.use (express.json())
app.use(express.urlencoded({extended:true}))

app.use(morgan("combined"))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(API)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

