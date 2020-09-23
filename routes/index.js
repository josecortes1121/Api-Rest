'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const billCtrl = require('../controllers/bill')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()
/* Product routes */
api.get('/product', auth, productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)

/* Bill routes */

api.get('/bill', auth, billCtrl.getBills)
api.get('/bill/:billId', billCtrl.getBill)
api.post('/bill', auth, billCtrl.saveBill)
api.put('/bill/:billId', auth, billCtrl.updateBill)
api.delete('/bill/:billId', auth, billCtrl.deleteBill)

/* Register routes */
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api
