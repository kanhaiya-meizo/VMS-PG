import express from "express";
import GuardController from "./guard.controller.js";

const guardController = new GuardController();

const guardRouter = express.Router();