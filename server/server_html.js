//this server provides the HTML document
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('build'));

app.get('*', (req, res)=>{
    res.sendFile('index.html', {root: 'build'});
})

app.listen(PORT, () => {
  console.log(new Date().toString().slice(0, 24), `| HTML Server listening on port: ${PORT}`);
})