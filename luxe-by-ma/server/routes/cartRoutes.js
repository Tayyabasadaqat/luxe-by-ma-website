const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ======================
// GET USER CART
// ======================

router.get("/:userId", (req, res) => {

    const { userId } = req.params;

    db.query(
        "SELECT * FROM cart WHERE user_id = ?",
        [userId],
        (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(results);

        }
    );

});


// ======================
// SAVE CART ITEM
// ======================

router.post("/", (req, res) => {

    const {
        user_id,
        product_data,
        quantity
    } = req.body;

    db.query(
        "INSERT INTO cart(user_id, product_data, quantity) VALUES(?,?,?)",
        [
            user_id,
            product_data,
            quantity
        ],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json(err);
            }

            res.json({
                message: "Added to cart"
            });

        }
    );

});


// ======================
// DELETE CART ITEM
// ======================

router.delete("/:userId/:productId", (req, res) => {

    const { userId, productId } = req.params;

    const sql = `
        DELETE FROM cart
        WHERE user_id = ?
        AND JSON_EXTRACT(product_data, '$.id') = ?
    `;

    db.query(
        sql,
        [userId, productId],
        (err, result) => {

            if (err) {
                console.log("DELETE CART ERROR:", err);

                return res.status(500).json({
                    message: "Failed to remove cart item"
                });
            }

            res.json({
                message: "Cart item removed"
            });

        }
    );

});


module.exports = router;