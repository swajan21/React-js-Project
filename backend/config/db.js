import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dipto:diptomongopass@cluster0.rtcnx1w.mongodb.net/food app').then(()=>console.log('DB Connected'));
}