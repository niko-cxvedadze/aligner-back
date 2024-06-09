import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(`mongodb://localhost:27017/`, {
      user: 'root',
      pass: 'root',
      dbName: 'aligner-back',
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
}
