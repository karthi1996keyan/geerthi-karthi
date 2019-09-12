var express=require('express');
var app=express();


/**
 * will check with unit testing this time
 * added one more line 
 */
app.get('/',(req,res)=>
{
    res.send("totally different from others from githusdfdsb ");
})

app.listen(3000,"0.0.0.0",()=>
{
    console.log('Port is running in 3000');
});
