import dbConnect from "../../../libs/db.Connect";
import Patient from "../../../models/patient.model";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const patient = await Patient.find({});
    res.status(200).json(patient);
  } else if (req.method === "POST") {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed. Only GET and POST is allowed" });
  }
}
