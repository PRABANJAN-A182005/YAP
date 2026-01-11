import mongoose from 'mongoose';
import { ENV } from './env';
export const connectDB = async (mongoURL) => {
    try {
        const {MONGODB_URL} = ENV;
        if(!MONGODB_URL) {
            throw new Error("MONGODB_URL is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.MONGODB_URL)
        console.log("MongoDB connected:", conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};