var express=require('express');
var app=express();


/**
 * I jus t added for this check jenkins pipeline
 */
app.get('/',(req,res)=>
{
    res.send("this is from jenkins CI/CD pipeline");
})

app.listen(3000,()=>
{
    console.log('Port is running in 3000');
});