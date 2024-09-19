import express from "express";
import VisitorController from "./visitor.controller.js";

const visitorController = new VisitorController();

const visitorRouter = express.Router();
