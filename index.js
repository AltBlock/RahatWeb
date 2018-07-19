const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const { Pool } = require('pg')
require('dotenv').config()
const flash = require('connect-flash');

const passport = require("passport")
const request = require('request')
const session = require("express-session")
app.use(require('cookie-parser')())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(flash());
app.use(session({secret: 'keyboard cat'}))


// app.listen(4000, () => {
//   console.log("eth is working")

//       pool.connect((err, client, done) => {
//         // Handle connection errors
//         if(err) {
//           //done();
//           return console.error(err);
//         }

//         pool.query('SELECT * FROM usertb', (err, result) => {
//           if(err){
//               return console.error('error running query', err);
//           }
          
//           console.log(result.rows)
//         }); 
//       });
        

// });


app.get('/', (req, res) => {
    res.render('index',{})
})

require('./routes/routes.js')(app)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))