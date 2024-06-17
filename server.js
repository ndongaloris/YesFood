const express = require("express");
const app = express();
const route = require("./routes");
const dotenv = require("dotenv");
// dotenv.config();
const db = require("./models");
const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use("/", route);


process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});

db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () =>{
        console.log(`app listening on ${HOST}:${PORT}`);
    })
    console.log("Databases connected");
}).catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});

