import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// 如果模型已經存在就使用它，避免重複定義
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
