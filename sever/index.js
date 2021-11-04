const express=require('express')
const app=express()
const mysql=require("mysql")
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"form-database",
});
app.get("/",(req,res)=>{
    const sqlInsert="INSERT INTO form(salesman,pname,price,noofsales) VALUES('sreeraj','pen','10','20'):"
    
    db.query(sqlInsert,(err,result)=>{
        res.send("heloo")
    })

});
app.listen(3001,()=>{
    console.log("running on port 3001");
});