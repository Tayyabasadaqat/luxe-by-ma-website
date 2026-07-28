const express = require("express");
const router = express.Router();
const db = require("../config/db");


// =========================
// GET USER ORDERS
// =========================

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
            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json(results);

    });

});


// =========================
// CREATE ORDER
// =========================

router.post("/", (req, res) => {

    const {
        user_id,
        total,
        address,
        city,
        postal_code,
        payment_method
    } = req.body;

    const sql = `
        INSERT INTO orders
        (user_id,total,address,city,postal_code,payment_method)
        VALUES (?,?,?,?,?,?)
    `;

    db.query(
        sql,
        [
            user_id,
            total,
            address,
            city,
            postal_code,
            payment_method
        ],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: err.sqlMessage
                });
            }

            res.json({
    message: "Order placed successfully!",
    orderId: result.insertId
});

        }
    );

});

module.exports = router;