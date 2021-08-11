const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
    image: String,
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);

/* export class Product {
  _id: string = '';
  name: string = '';
  category: string = '';
  price: number = 0;
  active: boolean = true;
  image?: string = '';
  description: string = '';
} */
