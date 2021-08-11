const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const OrderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    productIds: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    },
    // products: [{
    //     productId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product',
    //         required: true
    //     },
    //     amount: {
    //         type: Number,
    //         required: true
    //     },
    // }],
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    note: {
        type: String,
    }
}, {
    timestamps: true
});

OrderSchema.plugin(idValidator);

module.exports = mongoose.model('Order', OrderSchema);

/* export class Order {
    _id: string = '';
    customerId: string = '';
    productIds: string[] = [];
    date: Date = new Date();
    amount: number = 0;
    status: "new" | "shipped" | "cancelled" = "new";
    note: string = '';
  } */