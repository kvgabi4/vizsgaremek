const fsp = require('fs').promises;
const Bill = require('../models/bill.model');
const Order = require('../models/order.model');
const Customer = require('../models/customer.model');
const Product = require('../models/product.model');
const User = require('../models/user.model');

const seedCollection = async (model, fileName) => {
    try {
        const exists = await model.find().count();
        if (!exists) {
            throw new Error();
        }
    } catch (e) {
        const source = await fsp.readFile(
            `./src/seed/${fileName}.json`, 
            'utf8'
        );
        const list = JSON.parse(source);
        if (model && model.insertMany) {
            await model.insertMany(list, {limit: 100});
        }
    }
};

( async () => {

    try {
        await Car.db.dropCollection('cars');
    } catch(e) {
        console.log('CARS NOT FOUND');
    }

    seedCollection(Bill, 'bills');
    seedCollection(Customer, 'customers');
    seedCollection(Order, 'orders');
    seedCollection(Product, 'products');
    // seedCollection(User, 'users');
})();