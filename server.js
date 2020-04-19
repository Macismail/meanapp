const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
// const routes = require('./routes/api');
const routes = require('./routes/auth');


const app = express();
// setup port
const PORT = process.env.PORT || 8080;

// connect to mongodb
// const MONGODB_URI = 'mongodb+srv://ismail:ismail77@cluster0-vcqrp.mongodb.net/test?retryWrites=true&w=majority';
// to connect app db with sandBox 
// MONGODB_URI = 'mongodb://heroku_x7f0dnv9:s20h6f14a0h953i6g07h0hq0mo@ds351628.mlab.com:51628/heroku_x7f0dnv9'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernapp_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected .....')
});

// Allows cross-origin domains to access this API
// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   res.append('Access-Control-Allow-Credentials', true);
//   next();
// });

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

// http request logger
app.use(morgan('tiny'));

// link to the routes folder
app.use('/api', routes);
app.use('/auth', routes);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname+'client/dist/client'));
  // redirect the queries to the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'client/dist/client/index.html'));
  });

}

app.listen(PORT, console.log(`Server Starting in port: ${PORT}`));