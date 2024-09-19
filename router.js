import express from "express";

const router = express.Router();

// root api
router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to the Vistor Management System",
        status: 200,
        success: true
    })
});

export default router;