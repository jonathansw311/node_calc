
const express = require('express')
const errorHandle = require('./errorHandle')
const app = express();
app.use(express.json())//needed for expresss to parse request bodies

const {getMean, getMedian, getMode}=require('./calculations')

app.get('/', function(req, res){
    res.send('Calc Home page!!!!')
    } )


app.get('/mean', function(req, res, next){
  try{
const numbAry = req.query.nums.split(',').map(Number);
for (let num of numbAry){
    if (isNaN(num)){
      throw new errorHandle('NaN found', 400)
    }}

let response = {
  operation:'mean',
  value:getMean(numbAry)
}
res.json( response)
}catch(e){
  next(e)
}});

app.get('/median', function(req,res, next){
  try{
    const numbArynonSort = req.query.nums.split(',').map(Number)
    for (let num of numbArynonSort){
      if (isNaN(num)){
        console.log('median error thrown')
        throw new errorHandle('NaN found', 400)
      }}

      let response = {
        operation:'median',
        value:getMedian(numbArynonSort)}
     
    return res.json( response)
  }catch(e){
    next(e)
  }})


app.get('/mode', function(req, res, next){

  try{
    const numbArynonSort = req.query.nums.split(',')
    for (let num of numbArynonSort){
      if (isNaN(num)){
        throw new errorHandle('NaN found', 400)
      }}

      if(numbArynonSort[0]==="") {throw new errorHandle('You Must Enter at leaset one number', 400)}
     
      let response = {
        operation:'mode',
        value:getMode(numbArynonSort)}
      
   
 
 return res.json( response)
} catch(e){
  next(e)
}});



app.use((error, req, res, next)=>{
  console.log(error.msg)
  return res.status(error.status).json({error: error})
})


app.listen(3000, function(){
    console.log('App on port 3000')
});