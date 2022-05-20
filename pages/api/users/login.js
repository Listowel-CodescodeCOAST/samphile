import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dbConnect from "../../../libs/db.Connect";
import User from "../../../models/user.model";
import { loginSchema } from "./validations";

export default async function handler(req, res) {
  await dbConnect();

  const { value, error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  let user = await User.findOne({ email: value.email });

  if (!user) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  const isMatch = await bcrypt.compare(value.password, user.password);

  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },

    "listowel",

    {
      expiresIn: "1h",
    }
  );

  res.status(200).json(token, { user });
}
