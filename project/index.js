import express from 'express'
import hbs from 'hbs'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'


  mongoose.connect("mongodb://127.0.0.1:27017/cinema",)
            
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

const screen1model = mongoose.model('screen1',{
    seatno:{type:Number},  
    status:{type:String}
})
const screen2model = mongoose.model('screen2',{
    seatno:{type:Number},  
    status:{type:String}
})
const screen3model = mongoose.model('screen3',{
    seatno:{type:Number},  
    status:{type:String}
})
const moviesmodel = mongoose.model('movies',{
    name:{type:String},
    rate:{type:Number},  
    screenNo:{type:Number}
})

//  console.log('fetching screen1')   
var screen1Res 
screen1model.find()
.then(function (output){
    screen1Res = output
}).catch(function (err){
    console.log(err)
})
var screen2Res 
 screen2model.find()
 .then(function (output){
    screen2Res = output
 })
 .catch(function (err){
    console.log(err)
 })
var screen3Res 
 screen3model.find()
 .then(function (output){
    screen3Res = output
 }).catch(function (err){
    console.log(err)
 })
var moviesRes 
moviesmodel.find()
.then(function (output){
    moviesRes = output
    }).catch(function (err){
        console.log(err)
        })


const app = express()
const __filename =fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))

app.get('/cinema', async (req, res)=>{
    
    res.render('cinema',{
        movies:moviesRes,
        screen1:screen1Res,
        screen2:screen2Res,
        screen3:screen3Res,
        
    })
})
app.listen(3000, ()=>{
    console.log("listening at port no: 3000")})