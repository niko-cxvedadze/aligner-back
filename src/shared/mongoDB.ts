import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:admin@aligner-test.giiq7pf.mongodb.net/?retryWrites=true&w=majority&appName=aligner-test`,
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
}
