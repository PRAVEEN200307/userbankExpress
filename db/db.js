import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
connectDb().catch(err => console.log(err));

export async function connectDb() {
    await mongoose.connect(process.env.MANGOO_PASSWORD);
    console.log('Db connected...')
}