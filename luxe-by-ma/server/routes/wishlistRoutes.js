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


// ======================
// DELETE WISHLIST ITEM
// ======================

router.delete("/:userId/:productId", (req, res) => {

    const { userId, productId } = req.params;

    const sql = `
        DELETE FROM wishlist
        WHERE user_id = ?
        AND JSON_EXTRACT(product_data, '$.id') = ?
    `;

    db.query(
        sql,
        [userId, productId],
        (err, result) => {

            if (err) {
                console.log("DELETE WISHLIST ERROR:", err);

                return res.status(500).json({
                    message: "Failed to remove wishlist item"
                });
            }

            res.json({
                message: "Wishlist item removed"
            });

        }
    );

});


module.exports = router;