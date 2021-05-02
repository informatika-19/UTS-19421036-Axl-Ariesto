const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const cors = require ('cors')
const bodyParser = require ('body-parser')

const mongoURL = 'mongodb://localhost:27017/Toko_Funiture'
mongoose.connect(mongoURL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (() =>{
    console.log ('berhasil ke database')
}).catch ((err) =>{
    console.log('gagal ke database')
})
app.use(cors())
app.use(bodyParser.json({
    extended: true,
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.get('/',(req, res)=>{
    res.send('<h1>Data Toko Funiture</h1>')
})
app.use ('/barang', require('./routes/barang'))

app.listen(3000, function(){
    console.log ('Server telah dijalankan')
})