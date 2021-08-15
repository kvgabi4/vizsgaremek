const Bill = require('../../models/bill.model');

module.exports.create = data => {
    const entity = new Bill(data);
    return entity.save();
};

module.exports.findAll = () => Bill.find().populate();

module.exports.findOne = id => Bill.findById(id).populate();

module.exports.update = (id, updateData) => Bill.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => Bill.findByIdAndRemove(id);
