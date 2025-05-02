const bodyParser = require('body-parser');
require('dotenv').config();
let express = require('express');
let app = express();
//console.log('Hello world!');

absolutePath = __dirname + '/public'
app.use(bodyParser.urlencoded({extended: false}))

// app.use(express.static(absolutePath))
// app.use('/public',express.static(absolutePath))

//var response ="Hello Json"

// app.get('/json', (req, res) =>{
//   let response ="Hello json"
//   if (process.env.MESSAGE_STYLE === 'uppercase'){
//     response=response.toUpperCase()
//   } res.json({message: response})
  
// } )

// app.use(function middleware(req, res, next){
//   let string = `${req.method} ${req.path} - ${req.ip}`
//   console.log(string)
//   next()
// })

// app.get('/now', (req, res, next)=>{
//   req.time = new Date().toString()
//   next();
// },
//   (req, res)=>{
//       res.send({time: req.time});
//     console.log(req.time)
//     })


// app.get('/:word/echo', (req, res ) => {
//   let word = req.params.word;
//   res.json({echo:word})
// })

// app.get('/name', (req, res) => {
//   let firstName = req.query.first;
//   let lastName = req.query.last;
//   res.json({name: `${firstName} ${lastName}`})
// })


app.post("/name", (req, res) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({name: `${firstName} ${lastName}`})
})



































 module.exports = app;
