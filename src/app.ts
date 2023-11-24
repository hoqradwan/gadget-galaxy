import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";
app.use(express.json());
app.use(cors())
app.use("/api", userRoutes);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;