const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;


mongoose.connect("mongodb+srv://admin:sozder@soz.r8fea.mongodb.net/jirtrack?retryWrites=true&w=majority", {
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

app.use('/', (req, res) => {
  res.send({answer: 'hey you got it'});
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));