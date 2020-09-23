'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})
.then(db => console.log('Db is conneted'))
.catch(err => console.log('Error',err))

app.listen(config.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.port}`)
})

