import mongoose from 'mongoose';

async function connectDB() {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://DennisEduar:Denniscool2001@codegrid.mh2xdmj.mongodb.net/CodeGrid`
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.brightCyan.bold.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.brightRed.bold.underline);
    process.exit(1);
  }
}

export default connectDB;
