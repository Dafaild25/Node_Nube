const Customer = require('../models/Customer')
//crear una funcion para llamado a select del modelo 
//envia parametros  req y res
// res significa reponse= respuesta
// req significa request = respuesta
const listCustomer = async(req, res)=>{
    try{
        const customer = await Customer.getCustomers(); //llamado a funcion de select
        res.json(customer); //parsea a jason y retorna la respuesta
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
const insertCustomer=async(req,res)=>{
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const updateCustomer=async(req,res)=>{
    try {
        const customer = await Customer.update(req.body, req.params.id);
        //error por defecto
        res.json(customer)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const deleteCustomer=async(req,res)=>{
    try {
        const customer = await Customer.delete(req.params.id);
        res.json(customer)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports ={
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};