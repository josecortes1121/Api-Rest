'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BillSchema = Schema({
  name: String,
  quantity : Number,
  saleDate : {type:Date, default : new Date()},
  price: { type: Number, default: 0 },

  })

module.exports = mongoose.model('Bill', BillSchema)
