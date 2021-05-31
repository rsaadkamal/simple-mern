const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<H3>Voyage Calculator frontend</H3>')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
