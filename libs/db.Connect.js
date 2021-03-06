import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please provide connection string in the .env.local file");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = await mongoose
      .connect(MONGO_URL, opts)
      .then((mongoose) => mongoose);

    cached.conn = await cached.promise;
    return cached.conn;
  }
}

export default dbConnect;
