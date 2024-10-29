import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connection = mongoose.connection.readyState;

  if (connection === 1) { 
    return;
  }

  if (connection === 2) {
    console.log('connecting');

    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: 'Scheduler',
      bufferCommands: true
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return (error.message);
    }
  }
}

export default connect;