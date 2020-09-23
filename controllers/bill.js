'use strict'

const Bill = require('../models/bill')

function getBill (req, res) {
  let billId = req.params.billId

  Bill.findById(billId, (err, bill) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!bill) return res.status(404).send({message: `El producto no existe`})

    res.status(200).send({ bill })
  })
}

function getBills (req, res) {
  Bill.find({}, (err, bills) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!bills) return res.status(404).send({message: 'No existen productos'})
    res.status(200).send({bills})
    //res.send(200, { bills })
  })
}

function saveBill (req, res) {
  console.log('POST /api/bill')
  console.log(req.body)

  let bill = new Bill()
  bill.name = req.body.name
  bill.quantity = req.body.quantity
  bill.saleDate = req.body.saleDate
  bill.price = req.body.price

  bill.save((err, billStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ bill: billStored })
  })
}

function updateBill (req, res) {
  let billId = req.params.billId
  let update = req.body

  Bill.findByIdAndUpdate(billId, update, (err, billUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})

    res.status(200).send({ bill: billUpdated })
  })
}

function deleteBill (req, res) {
  let billId = req.params.billId

  Bill.findById(billId, (err, bill) => {
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    bill.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  })
}

module.exports = {
  getBill,
  getBills,
  saveBill,
  updateBill,
  deleteBill
}
