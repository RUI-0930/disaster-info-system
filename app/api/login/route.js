import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    await connectMongo();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: '找不到使用者' }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: '密碼錯誤' }, { status: 400 });
    }

    return NextResponse.json({ message: '登入成功' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: '伺服器錯誤' }, { status: 500 });
  }
}