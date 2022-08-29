import express from "express";
import morgan from "morgan";
import { AppDataSource } from "./data-source";

const app = express();

app.use(express.json());
app.use(morgan('dev'));


app.get("/", (_, res) => res.send("running"));// / 경로로 오면 running이라는 것을 보여줄 것

let port = 4000;
app.listen(port, async () => {
    console.log(`server running at http://localhost:${port}`);
    AppDataSource.initialize().then(    () => {
        console.log("database initialized")
    }).catch(error => console.log(error))
    

})