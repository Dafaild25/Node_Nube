const express = require('express') //llamado al framework
//llamar a  handlers del api
const customerHandler = require('./app/handlers/customer.handler')
//variable para encapsular rutas
const router = express.Router();

//regitrar las rutas 
//rutas de customer 
router.get('/customers',customerHandler.listCustomer)
router.post('/customers',customerHandler.insertCustomer)
router.patch('/customers/:id',customerHandler.updateCustomer)
router.delete('/customers',customerHandler.deleteCustomer)

//deber intalar el programa postman o insomia
module.exports = router