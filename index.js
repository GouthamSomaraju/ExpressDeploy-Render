var express=require("express")
var app=express()

app.get('/',async(req,res)=> {
    let result= await fetch("https://fakestoreapi.com/products")
    let data= await result.json()
    res.json(data)
})
app.listen(3000,()=>{
    console.log("Server Started");
    
})