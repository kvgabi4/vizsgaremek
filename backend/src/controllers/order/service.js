const Order = require('../../models/order.model');

module.exports.create = data => {
    const entity = new Order(data);
    return entity.save();
};

module.exports.findAll = () => Order.find().populate('customer', 'products');

module.exports.findOne = id => Order.findById(id).populate('customer', 'products');

module.exports.update = (id, updateData) => Order.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => Order.findByIdAndRemove(id);
