const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  console.log('happenede')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  console.log('endu')
  next();
});



mongoose.connect("mongodb+srv://admin:sozder@soz.r8fea.mongodb.net/late?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!');
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// app.use('/api/auth', require('./routes/auth.route'))
// app.use('/api/user', checkAuth, require('./routes/user.route'))

// app.get('*', function(request, response) {
//   // response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
//
//   response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

app.use('/event', require('./routes/event.route'))

//
// app.use( '/', (req, res) => {
//   console.log('not happenedde')
//   res.send({answer: 'hey you got it'});
// })

app.use((err, req, res, next) => {
  res.sendStatus(500);
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
