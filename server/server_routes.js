//this server provides the API database routes
const express = require('express');
const {db} = require('./Arangodb.js');
const aqlQuery = require('arangojs').aqlQuery;
const app = express();
const PORT = 3005;
const path = require('path');
const cors = require('cors');

var bodyParser = require('body-parser');
app.use(express.static('build'));
app.use(bodyParser.json());

//enable cors
app.use(cors());

//blog
app.get('/blog', (req, res)=>{
  console.log('serving request for all blog posts...')
    let collection = db.collection('blog');  
    // retrieve entire collection
    collection.all().then(
      cursor => cursor.map(doc => doc)
    ).then(
      keys => res.send(keys)
    )
  })

  app.get('/blog/post/:params', (req, res)=>{
    console.log('req', req.originalUrl)
    let requestedResource = req.originalUrl.split('-').join(' ').slice(11);
    console.log(requestedResource);

    db.query(`FOR doc IN blog
    FILTER doc.shorttitle == '${requestedResource}'
    RETURN doc`).then(
        cursor => cursor.map(doc => doc)
    ).then(
        keys => res.send(keys)
    )

    // let collection = db.collection('blog');  
    // // retrieve entire collection
    // collection.all().then(
    //   cursor => cursor.map(doc => doc)
    // ).then(
    //   keys => res.send(keys)
    // )
  })

app.post('/blog', (req, res) => {
  console.log(req.body);
  let collection = db.collection('blog');
  let doc = {
    ...req.body
  }
  collection.save(doc).then(
    meta => {
      console.log('Document successfully saved: ', meta._id)
      res.send(meta);
    }
  )
})

//flashcards
app.get('/flashcards', (req, res)=>{
    let collection = db.collection('flashcards');  
    // retrieve entire collection
    collection.all().then(
      cursor => cursor.map(doc => doc)
    ).then(
      keys => res.send(keys)
    )
  })

app.patch('/flashcards', (req, res)=>{
  console.log(req.body)
  let newDocument = {
    word: req.body.word,
    definition: req.body.definition,
    studyCount: req.body.studyCount
  }
  db.query(`FOR doc in flashcards Replace "${req.body._key}" with {word: "${req.body.word}",
    definition: "${req.body.definition}", studyCount: ${req.body.studyCount}} in flashcards`)
    .then(()=>{
      let collection = db.collection('flashcards');
      collection.all().then(
        cursor => cursor.map(doc => doc)
      ).then(
        keys => res.send(keys)
      )
    })
})

app.post('/flashcards', (req, res)=>{
  console.log(req.body)
  //code to add new document
  let collection = db.collection('flashcards');
  let doc = {
    ...req.body
  }
  collection.save(doc).then(
    meta => {
      console.log('Document successfully saved: ', meta._id)
      res.send(meta);
    }
  )
})

//NBA
// app.get('/nba/schedule', (req, res) => {
//   //check Arango for info
//   db.query({
//     query: `FOR doc IN @@c RETURN {doc}`,
//     bindVars: { "@c": "nbaschedule" },
//   })
//   .then(function (cursor) {
//     return cursor.map((product)=>{
//       return product
//     })
//   })
//   .catch(function (err) {
//     console.error(err.message);
//   })
//   .then(function (data) {
//     console.log(data)
//     res.status(201).send(data)
//   })
//   //if not exists, check sportradarapi for info
// })

app.listen(PORT, () => {
  console.log(new Date().toString().slice(0, 24), `| Server listening on port: ${PORT}`);
})