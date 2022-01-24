require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");

async function connectDb() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            },
            () => {
                console.log(
                    `🐳  [API] Connected to MongoDB at ` +
                        chalk.blueBright(process.env.MONGODB_URI)
                );
            }
        );
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDb;
