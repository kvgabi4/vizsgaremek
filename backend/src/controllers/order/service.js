const Order = require('../../models/order.model');
const Customer = require('../../models/customer.model');

module.exports.create = data => {
    const order = new Order(data);
    return order.save()
        .then( () => Customer.findById(data.customer) )
        .then( customer => {
            customer.orders.push(order._id);
            return customer.save();
        })
        .then( () => customer );
;
};

module.exports.findAll = () => Order.find().populate('product');

module.exports.findOne = id => Order.findById(id).populate('product');

module.exports.update = (id, updateData) => Order.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => Order.findByIdAndRemove(id);
