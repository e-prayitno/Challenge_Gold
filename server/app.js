const express = require ("express")
const app = express()
const PORT = 3000
const db = require("./db/db")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/client", async (req, res)=>{
    try{
        const dataClient = await db("client").select("*")
        res.status(200).json(dataClient)

    }catch (error){
        res.status(500).json(error)
    }
})



app.listen(PORT, ()=>{
    console.log(`Terhubung dengan port ${PORT}`);
})