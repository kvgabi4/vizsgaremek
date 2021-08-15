const mongoose = require("mongoose");
const idValidator = require("mongoose-id-validator");

const OrderSchema = mongoose.Schema(
  // {
  //   customer: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Customer",
  //     required: true,
  //   },
  {
    customer: {
      type: String,
      required: true,
    },
    // products: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    //     required: true,
    //   },
    // ],
    // amounts: [{
    //   type: Number,
    //   required: true,
    // }],
    // price: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // product: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Product",
    //   required: true,
    // },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      default: 0
    },
    // products: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product',
    //         required: true
    // }],
    // orders: [{
    //     amount: {
    //         type: Number,
    //         required: true
    //     },
    //     price: {
    //         type: Number,
    //         required: true
    //     },
    // }],
    date: {
      type: String,
      default: new Date().toLocaleDateString("hu-HU"),
    },
    status: {
      type: String,
      default: 'új',
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

OrderSchema.plugin(idValidator);

module.exports = mongoose.model("Order", OrderSchema);

/* export class Order {
    _id: string = '';
    customerId: string = '';
    productIds: string[] = [];
    date: Date = new Date();
    amount: number = 0;
    status: "new" | "shipped" | "cancelled" = "new";
    note: string = '';
  } */
