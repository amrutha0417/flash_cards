const express=require('express')
const app=express()
const mysql=require('mysql2');
const cors=require('cors')
const bodyParser=require('body-parser')

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crud_content"
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))



app.get("/api/get",(req,res)=>{
    const sqlInsert="SELECT * FROM flashcard_db";
    db.query(sqlInsert,(err,result)=>{
        res.send(result)
    })
    
})

app.post("/api/insert",(req,res)=>{
    const question=req.body.question
    const answer=req.body.answer
    const sqlInsert="INSERT INTO flashcard_db(question,answer) VALUES (?,?)";
    db.query(sqlInsert,[question,answer],(err,result)=>{
        console.log(result)
    })
})

app.listen(3001,()=>{
    console.log("Server is running on port number 3001");
})