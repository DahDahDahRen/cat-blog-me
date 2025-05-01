const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 16,
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "CatPost" }],
  },
  {
    timestamps: true,
  }
);

// Hashpassword middleware
userSchema.pre("save", async function (next) {
  // Check if password is modified
  if (!this.isModified("password")) {
    return next();
  }

  // Hash Password
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.comparePassword = function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
