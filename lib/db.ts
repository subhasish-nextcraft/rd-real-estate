import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('conected to db');
  } catch (error) {
    console.log('db connection error', error);
  }
};

export default connectDB;
