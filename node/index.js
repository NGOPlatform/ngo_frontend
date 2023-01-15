judeteJson = require("./data/judete.json");
localitatiJson = require("./data/locations.json");
parsedJudete = require("./data/parsedJudete.json");
parseData = require("./parseData")
// console.log(parseData.parseData())
const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001
app.use(cors({
  origin: 'http://localhost:3000'
}));
const filterUnique = (value, index, self) =>
index === self.findIndex((t) => (t.label === value.label));
const allLocalitati = Object.values(localitatiJson).flat().filter(filterUnique);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/judete', (req, res) => {
  res.send(parsedJudete);
})

app.get('/localitati', (req, res) => {
  const size = req.query.size ?? 3;
  const judet = req.query.judet.trim();
  // console.log(judet, judet=='')
  if ( judet === '')
    res.send(allLocalitati.slice(0, size));
  else {
    const localitatiKey = Object.keys(localitatiJson).filter(el => el.includes(judet.toUpperCase()))[0];
    // console.log(localitatiKey)
    if (localitatiKey == undefined)
      res.send(allLocalitati.slice(0, size));
    else res.send(localitatiJson[localitatiKey].filter(filterUnique));
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

