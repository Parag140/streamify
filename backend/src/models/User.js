import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Corrected: use 'minlength' (all lowercase)
    },
    bio: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default: "",
    },
    nativeLanguage: {
      type: String,
      default: "",
    },
    learningLanguage: {
      type: String,
      default: "",
    },
    isOnBoard: {
      type: Boolean,
      default: false,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// Timestamps give us createdAt and updatedAt
// We also want to hash our passwords before saving

userSchema.pre("save", async function (next) {
  // Use regular function to access 'this'
  if (!this.isModified("password")) {
    return next(); // Add return to prevent further execution
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); // Corrected typo: hash, not has
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function(enteredPassword){
  const isPasswordCorrect = bcrypt.compare(enteredPassword,this.password);
  return isPasswordCorrect
}

const User = mongoose.model("User", userSchema);

export default User;
