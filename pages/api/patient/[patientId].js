import Patient from "../../../models/patient.model";
import dbConnect from "../../../libs/db.Connect";

export default async function handler(req, res) {
  const { method, body, query } = req;

  if (method === "GET") {
    const patient = await Patient.findById(query.patientId);
    if (!patient) {
      res.status(404).json({ error: "Patient Not Found" });
    }
    res.status(200).json({ patient });
  } else if (method === "PATCH") {
    let patient = await Patient.findById(query.patientId);
    if (!patient) {
      res.status(404).json({ error: "Patient Not Found" });
    }

    patient = await Patient.findByIdAndUpdate(query.patientId, body, { new: true });
    res.status(200).json({ patient });
  } else if (method === "DELETE") {
    let patient = await Patient.findById(query.patientId);
    if (!patient) {
      res.status(404).json({ error: "Patient Not Found" });
    }
    await Patient.findByIdAndDelete(query.patienttId);
    res.status(200).json({ msg: "Patient deleted successfuly." });
  }
}
