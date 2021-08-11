const Product = require('../../models/product.model');

module.exports.create = data => {
    const entity = new Product(data);
    return entity.save();
};

module.exports.findAll = () => Product.find().populate();

module.exports.findOne = id => Product.findById(id).populate();

module.exports.update = (id, updateData) => Product.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => Product.findByIdAndRemove(id);
