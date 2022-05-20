import dbConnect from "../../../libs/db.Connect";
import Record from "../../../models/record.model";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const record = await Record.find({});
    res.status(200).json(record);
  } else if (req.method === "POST") {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed. Only GET and POST is allowed" });
  }
}
