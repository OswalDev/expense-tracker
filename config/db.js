const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true

    });
    
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch (err) { // in case in doesn't connect correctly
        console.log(`Error: ${err.message}`.red);
        process.exit(1); //shutdown app
    }
}

module.exports = connectDB;