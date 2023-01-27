const express = require('express');
const sequelize = require('./config/connection');
const routes = require("./routes")
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/home',(req,res)=> {
  res.sendFile(path.join(__dirname,'/public/index.html'))
})
app.get('/moviepage',(req,res)=> {
  res.sendFile(path.join(__dirname,'/public/moviepage.html'))
})
app.use(routes)

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
