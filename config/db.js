const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB is connected')

    }
    catch (err) {
        console.log(`error: ${err.message}`)
    }
}



module.exports = connectDB;