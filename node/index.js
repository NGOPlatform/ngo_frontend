judeteJson = require( "./data/judete.json");
localitatiJson = require( "./data/locations.json");
parsedJudete = require( "./data/parsedJudete.json");
parseData  = require("./parseData")
// console.log(parseData.parseData())
const express = require('express')
const app = express()
const port = 3001



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/judete', (req,res)=>{
  res.send(parsedJudete);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

