const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ===============================
// ADMIN LOGIN
// ===============================

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {

        return res.json({
            success: true,
            message: "Admin login successful"
        });

    }

    res.status(401).json({
        success: false,
        message: "Invalid admin credentials"
    });

});

// ===============================
// GET ALL ORDERS
// ===============================

router.get("/orders", (req, res) => {

    const sql = `
        SELECT
            orders.*,
            users.full_name,
            users.email
        FROM orders
        JOIN users
        ON orders.user_id = users.id
        ORDER BY orders.created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log("ADMIN ORDERS ERROR:", err);

            return res.status(500).json({
                message: "Failed to load orders"
            });
        }

        res.json(results);

    });

});


// ===============================
// GET ALL USERS
// ===============================

router.get("/users", (req, res) => {

    const sql = `
        SELECT id, full_name, email
        FROM users
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log("ADMIN USERS ERROR:", err);

            return res.status(500).json({
                message: "Failed to load users"
            });
        }

        res.json(results);

    });

});


// ===============================
// GET CONTACT MESSAGES
// ===============================

router.get("/messages", (req, res) => {

    const sql = `
        SELECT *
        FROM contact_messages
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log("ADMIN MESSAGES ERROR:", err);

            return res.status(500).json({
                message: "Failed to load messages"
            });
        }

        res.json(results);

    });

});


// ===============================
// UPDATE ORDER STATUS
// ===============================

router.put("/orders/:id/status", (req, res) => {

    const { id } = req.params;
    const { status } = req.body;

    const sql = `
        UPDATE orders
        SET status = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [status, id],
        (err, result) => {

            if (err) {
                console.log("ADMIN STATUS ERROR:", err);

                return res.status(500).json({
                    message: "Failed to update order"
                });
            }

            res.json({
                message: "Order status updated"
            });

        }
    );

});


module.exports = router;