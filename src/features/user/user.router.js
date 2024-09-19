import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController()
const userRouter = express.Router();

userRouter.post("/addUser", (req, res) => {
    userController.createUser(req, res);
})