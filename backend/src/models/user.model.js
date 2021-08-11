const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);

/* export class User {
  _id: string = '';
  firstName?: string = '';
  lastName?: string = '';
  email?: string = '';
  active?: boolean = true;
  password?: string = '';
  accessToken?: string = ';'
} */
