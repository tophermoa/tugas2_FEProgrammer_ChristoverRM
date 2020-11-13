var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose=require('mongoose');
const path = require('path');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/pendudukdb'

mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log("Terkonek ke MongoDB"))
  .catch(err=>console.log(err))

var Wargas = require('./src/routes/Wargas');
app.use('/wargas', Wargas)


// handle 404 error
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found di server"});
  else 
    res.status(500).json({message: "ERROR di server !!!"});
});




app.listen(8080, () => {
  console.log("Running port : 8080")
})