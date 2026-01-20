/* src/routes/generate.js */

import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    const { domain, topic, count } = req.body;

    if(!domain || !topic) {
        return res.status(400).json({
            error: "domain and ropic are required"
        });
    }

    // Temp: mocked responses
    res.json({
        status: "ok",
        domain,
        topic,
        count: count || 5,
        data: []
    });
});

/*
later this route will
getSchema(domain)
generateWithAI(...)
validate(...)
*/

export default router;