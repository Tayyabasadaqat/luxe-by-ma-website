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

module.exports = router;