const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/", (req, res) => {

  const {
    user_id,
    total,
    address,
    city,
    postal_code,
    payment_method,
  } = req.body;

  const sql = `
    INSERT INTO orders
    (user_id, total, address, city, postal_code, payment_method)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      user_id,
      total,
      address,
      city,
      postal_code,
      payment_method,
    ],
    (err, result) => {

     if (err) {

    console.log("ORDER ERROR:", err);

    return res.status(500).json({
        message: err.sqlMessage || err.message
    });

}

      res.json({
        message: "Order placed successfully!",
      });

    }
  );

});

module.exports = router;