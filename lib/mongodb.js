import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB 已連線');
  } catch (error) {
    console.error('❌ MongoDB 連線失敗:', error);
    throw new Error('MongoDB 連線失敗');
  }
};

export default connectMongo;
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('請設定 MONGODB_URI 到你的環境變數中');
// }

// let isConnected = false;

// export default async function connectMongo() {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log('✅ MongoDB 已連線');
//   } catch (error) {
//     console.error('❌ MongoDB 連線失敗:', error);
//     throw error;
//   }
// }
