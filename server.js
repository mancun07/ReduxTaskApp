const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
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


dotenv.config({path: './config/config.env'})
const logRoutes = require('./routes/logRoutes')
const techRoutes = require('./routes/techRoutes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


connectDB();

app.use('/api/v1/logs', logRoutes);
app.use('/api/v1/techs', techRoutes);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`PORT is working on ${PORT} PORT `));