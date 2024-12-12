import express from "express";
import { register, login } from "../controllers/userController.js";
import upload from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;