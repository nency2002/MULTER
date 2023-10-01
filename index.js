const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads' })

const app = express()


app.post('/', upload.single('img'), function (req, res) {
     res.send ("Upload images");

})

app.get("/",(req , res )=>{
    res.sendFile(__dirname + "index.html")
})
app.listen(9999 ,()=>{
    console.log('listening on');
})
