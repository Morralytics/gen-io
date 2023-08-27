import mongoose from "mongoose";

let isConnected = false; // Used to tract connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return
    }

    try {
        await mongoose.connect(process.enb.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (err) {
        console.log(err);
    }
}