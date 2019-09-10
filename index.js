var express=require('express');
var app=express();


/**
 * will check with unit testing
 */
app.get('/',(req,res)=>
{
    res.send("this is from jenkins CI/CD pipeline");
})

app.listen(3000,()=>
{
    console.log('Port is running in 3000');
});