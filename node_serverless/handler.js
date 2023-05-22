const express = require('express')
const cors = require('cors');
const serverless = require("serverless-http");

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
    res.send("Hello Fast")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports.server = serverless(app);