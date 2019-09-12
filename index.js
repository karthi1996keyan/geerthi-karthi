var express=require('express');
var app=express();


/**
 * will check with unit testing this time
 * added one more line 
 */
app.get('/',(req,res)=>
{
    res.send("dont confuse");
})

app.get('/test',(req,res)=>
	{
		res.send("test is start here -7st test");
	})
app.listen(3000,"0.0.0.0",()=>
{
    console.log('Port is running in 3000');
});
