const express = require('express');
var bodyParser = require('body-parser')

const mongoose = require('mongoose');

const Log = require('./models/userData')


const path = require('path');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/dataa');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html file for all other requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/user', (req, res) => {
  let data = req.body;

  saveDB(data)
  
  res.send('Data Received: ' + JSON.stringify(data));
})

app.get('/user', (req, res) => {
  res.send('YEEET')
})


async function saveDB(dataObj){ 
  let user = new Log(dataObj)

  const todayLog = await Log.exists({date: user.date})



  if(todayLog === null){
    try {
      await user.save();
      console.log(`Log saved succesfully!`)
    } catch (err) {
      console.error('Error betch')
    }
  } else {
    updateDB(user, todayLog)
  }

};

async function updateDB(input, ID){
  console.log('Input ', input, 'ID ', ID);

  try {
    const document = await Log.findById(ID);
    console.log('Document ', document)
    if(!document){
      console.log('Document not found');
      return;
    }

    document.code = input.code;
    document.gym  = input.gym;

    const updatedDocument = await document.save();

    console.log('Document updated:', updatedDocument);
  } catch(error) {
    console.error('Error:', error);
  }
}



// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});