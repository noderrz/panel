require("dotenv").config();
// Database stuff
const connectDb = require("./config/db");
connectDb();
const express = require("express");
const app = express();
const chalk = require("chalk");
const PORT = process.env.PORT || 4200;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

const userRouter = require("./routes/userRoutes");

// Language: javascript
// Path: src\api\server.js

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//Add the client URL to the CORS policy

const whitelist = process.env.WHITELISTED_DOMAINS
    ? process.env.WHITELISTED_DOMAINS.split(",")
    : [];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },

    credentials: true,
};

app.use(cors(corsOptions));

app.use(passport.initialize());

app.use("/users", userRouter);

app.get("/", function (req, res) {
    res.send({ status: "success" });
});

app.listen(PORT, () => {
    console.log(
        `⚙️  [API] Server is listening on port ` + chalk.blueBright(PORT)
    );
});
