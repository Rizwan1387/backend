const connectToMongodb = require("./db")


const express = require('express')
const app = express()
connectToMongodb();
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

