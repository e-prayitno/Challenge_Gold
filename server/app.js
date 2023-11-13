const express = require ("express")
const app = express()
const PORT = 3000
const Allroutes = require("./routes")
const ejs = require('ejs')

app.set('view engine', 'ejs');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(Allroutes)


app.listen(PORT, ()=>{
    console.log(`Terhubung dengan port ${PORT}`);
})