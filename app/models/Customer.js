const { format } = require('mysql2');
const {Model}=require('objection'); //llamar a model de laa libreria 

class Customer extends Model { //creo la herencai de model
    // funcion para establecer los get y seter
    static get tableName(){ //especifica el nombre de la tabla
        return 'customer';
    }
    static get jsonSchema(){ //especifica la estructura de una tabla
        return{
            type: 'object', //object pra un dato,  array pra una lista
            required:['name','email'],
            properties:{
                id:{type:'integer'},
                name:{type:'string',minLength:1},
                email:{type:'string',format:'email'},
                date:{type:'string',format:'date-time'},
                age:{type:'integer'}
            }

        };
    }
    static async getCustomers(){ // metodo listar  Clientes
        return await Customer.query(); // es un select*from Customer
    }
    static async insert(data){ //metodo para insertar clientes
        return await Customer.query().insert(data); // es un insert into Customeer
    }
    static async update(data, id){//metodo para actualizar
        return await Customer.query().patch(id,data); //update set data where id=0
    }
    static async delete(id){
        return await Customer.query().deleteById(id)// delete from customer where id = 0
    }
}
module.exports = Customer;