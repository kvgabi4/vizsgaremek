const Customer = require('../../models/customer.model');

module.exports.create = data => {
    const entity = new Customer(data);
    return entity.save();
};

module.exports.findAll = () => Customer.find().populate();

module.exports.findOne = id => Customer.findById(id).populate('orders');

module.exports.update = (id, updateData) => Customer.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => Customer.findByIdAndRemove(id);
