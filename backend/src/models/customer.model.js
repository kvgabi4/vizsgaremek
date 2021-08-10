const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      zip: {
        type: String | Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    coupon: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", CustomerSchema);

/* export class Customer {
    _id: string = '';
    firstName: string = '';
    lastName: string = '';
    address: {
        "zip": string | number,
        "city": string,
        "street": string
      } = {
        "zip": '',
        "city": '',
        "street": ''
      };
    email: string = '';
    phone: string = '';
    active: boolean = true;
    coupon: number = 0
  } */
