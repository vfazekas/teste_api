import express from "express";
import userRouter from "./routes/user.js";



const app = express();

app.use("/api/users/", userRouter);

app.listen(8001, () => {
 console.log("Servidor rodando na porta 8001");
})