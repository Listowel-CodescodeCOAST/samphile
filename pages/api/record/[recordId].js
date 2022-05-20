import Record from "../../../models/record.model";
import dbConnect from "../../../libs/db.Connect";

export default async function handler(req, res) {
  const { method, body, query } = req;

  if (method === "GET") {
    const record = await Record.findById(query.recordId);
    if (!record) {
      res.status(404).json({ error: "Record Not Found" });
    }
    res.status(200).json({ record });
  } else if (method === "PATCH") {
    let record = await Record.findById(query.recordId);
    if (!record) {
      res.status(404).json({ error: "Record Not Found" });
    }

    patient = await Record.findByIdAndUpdate(query.recordId, body, {
      new: true,
    });
    res.status(200).json({ record });
  } else if (method === "DELETE") {
    let record = await Record.findById(query.recordId);
    if (!record) {
      res.status(404).json({ error: "Record Not Found" });
    }
    await Record.findByIdAndDelete(query.recordId);
    res.status(200).json({ msg: "Record deleted successfuly." });
  }
}
