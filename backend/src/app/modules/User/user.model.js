const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("../../../config");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter your name"],
    },
    email: {
      type: String,
      required: [true, "Enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter your password"],
      select: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.methods.isPasswordMatched = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  // hashing user password
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bycrypt_salt_rounds)
    );
  }
  next();
});

UserSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, config.jwt.secret, {
    expiresIn: config.jwt.expires_in,
  });
};

module.exports = mongoose.model("User", UserSchema);
