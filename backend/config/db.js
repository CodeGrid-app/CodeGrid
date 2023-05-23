import mongoose from 'mongoose';

async function connectDB() {
  try {
    const conn = await mongoose.connect(`ADD URI HERE`);
  } catch (error) {
    console.error(error);
  }
}
