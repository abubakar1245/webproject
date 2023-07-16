const path = require('path');

const express = require('express');
const app = express();

//define path middle ware:
const staticPath = path.join(__dirname , "../public")


app.use(express.static(staticPath));

// listing process:
app.listen(8000 , ()=>{
    console.log('listning process will bi work will be successfuly...');
})