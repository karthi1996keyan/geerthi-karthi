var express=require('express');
var app=express();

app.get('/test',(req,res)=>
{
    res.send("this is from jenkins CI/CD pipeline");
})

app.listen(3000,()=>
{
    console.log('Port is running in 3000');
});