import express from "express";
import EmpMasterController from "./empMaster.controller.js";

const empMasterController = new EmpMasterController(); 

const empMasterRouter = express.Router();