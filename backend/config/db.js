import mongoose from "mongoose"; // Importing mongoose library to connect to MongoDB

/**
 * connectDB function attempts to connect to the MongoDB database using the MONGO_URI environment variable.
 * If successful, it logs a success message. If an error occurs, it logs the error message and exits the process.
 */
const connectDB = async () => {
  try {
    // Connecting to MongoDB using the provided URI
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Successfully connnected to mongoDB`);
  } catch (error) {
    // Handling connection errors
    console.error(`ERROR: ${error.message}`);
    process.exit(1); // Exiting the process in case of a connection error
  }
};

// Exporting the connectDB function for use in other modules
export default connectDB;