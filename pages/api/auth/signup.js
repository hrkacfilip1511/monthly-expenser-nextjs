import { connectToDatabase } from "../../../lib/database";
import { hashPassword } from "../../../lib/password-functions";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const client = await connectToDatabase();

    const existingUser = await client
      .db()
      .collection("users")
      .findOne({ email: email });

    if (
      !name ||
      name.length === 0 ||
      !email ||
      !email.includes("@") ||
      email.length === 0 ||
      !password ||
      password.length < 5
    ) {
      res
        .status(403)
        .json({ message: "All fields are required and needs to be valid" });
      client.close();
      return;
    }

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);
    const result = await client
      .db()
      .collection("users")
      .insertOne({ name: name, email: email, password: hashedPassword });
  }
  res.status(200).json({ message: "User created!" });
  client.close();
};

export default handler;
