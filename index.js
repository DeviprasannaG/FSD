const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/db'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
const app = express();


const bodyparser=require('body-parser')
const cors=require('cors')


app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))