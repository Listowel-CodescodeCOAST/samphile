import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bloodType: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    houseNumber: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    insuranceInfomation: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", patientSchema);
