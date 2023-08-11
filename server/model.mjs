import mongoose from 'mongoose';
import 'dotenv/config';

// connect to db
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING
);

const db = mongoose.connection;

// Confirm connection to db
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: "500:Connection to server failed." });
    } else {
        console.log("Successfully connected to MongoDB.");
    }
});

// Get leaderboard

pipeline = {}