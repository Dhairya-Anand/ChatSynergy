import mongoose from "mongoose";

const connectToMongoDB = async () => {
	const uri = process.env.URI;

    try{
        mongoose.connect(uri);
        console.log("MongoDB connected");
    }
    catch(error){
        console.log("Error in mongodb connection", error.message);
    }
};

export default connectToMongoDB;
