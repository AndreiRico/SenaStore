import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    // The username field is a required string with a unique index
    username: {
      type: String,
      required: true,
      unique: true,
    },

    // The email field is a required string with a unique index
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // The password field is a required string
    password: {
      type: String,
      required: true,
    },

    // The isAdmin field is a boolean that defaults to false
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } // Adding timestamps to the schema
);

const User = mongoose.model("User", userSchema);

export default User;