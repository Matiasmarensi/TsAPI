import { connect } from "mongoose";

async function dbConnect() {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
}

export default dbConnect;
