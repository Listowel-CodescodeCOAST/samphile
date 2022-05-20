import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Doctor's email is required"],
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: [true, "Doctor's name is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"]
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Record || mongoose.model("Record", recordSchema);
