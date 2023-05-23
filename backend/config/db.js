import mongoose from 'mongoose';

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.brightCyan.bold.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.brightRed.bold.underline);
    process.exit(1);
  }
}

export default connectDB;
