const express = require('express');
const app = express();


//  form handling 

app.use(express.json());
app.use(express.urlencoded({extends: true}));


app.use(function(req, res, next){
  console.log("middile ware chala")
  next();
});


app.get("/", function(req, res){
  res.send("I am the champion");
})


app.get("/about", function(req, res){
  res.send("test")
})


app.get("/profile", function(req, res, next){
  return next(new Error("yes Somthing is worng"))
})

app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send("Some thing is worng")
})
  
app.listen(3000)