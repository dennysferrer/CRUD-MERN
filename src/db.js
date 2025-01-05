import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.MONGO_URI
    try {
        await mongoose.connect(uri)
        console.log('DB connected successfully')
    } catch (error) {
        console.error('DB connection failed')
    }
}