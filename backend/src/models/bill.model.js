const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const BillSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    date: {
        type: Date,
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