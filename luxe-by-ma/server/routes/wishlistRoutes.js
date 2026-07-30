const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ======================
// GET USER WISHLIST
// ======================

router.get("/:userId", (req, res) => {

    const { userId } = req.params;

    db.query(
        "SELECT * FROM wishlist WHERE user_id = ?",
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
// ADD TO WISHLIST
// ======================

router.post("/", (req, res) => {

    const {
        user_id,
        product_data
    } = req.body;

    db.query(

        "INSERT INTO wishlist(user_id, product_data) VALUES(?, ?)",

        [
            user_id,
            JSON.stringify(product_data)
        ],

        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                message: "Added to wishlist"
            });

        }

    );

});

module.exports = router;