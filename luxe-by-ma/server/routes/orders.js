const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all orders of a user
router.get("/:userId", (req, res) => {

    const { userId } = req.params;

    const sql = `
        SELECT *
        FROM orders
        WHERE user_id = ?
        ORDER BY created_at DESC
    `;

    db.query(sql, [userId], (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(results);

    });

});

// Create Order
router.post("/", (req, res) => {

    const {
        user_id,
        total
    } = req.body;

    const sql = `
        INSERT INTO orders(user_id,total)
        VALUES (?,?)
    `;

    db.query(sql, [user_id, total], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(201).json({
            message: "Order placed successfully!"
        });

    });

});

module.exports = router;