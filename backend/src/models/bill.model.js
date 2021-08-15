const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const BillSchema = mongoose.Schema({
    order: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString('hu-HU'),
        required: true
    },
    status: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

BillSchema.plugin(idValidator);

module.exports = mongoose.model('Bill', BillSchema);

/* export class Bill {
  _id: string = '';
  orderId: string = '';
  time: Date = new Date();
  status: "new" | "paid" = "new";
} */