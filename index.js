import express from "express"

const app = express();
const port = 5000

app.get("/", (req,res) => res.send("hello world"));

app.listen(process.env.PORT || port, () => {
    console.log("test running at port " + port)
})