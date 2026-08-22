const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
// =========================
// RESET PASSWORD
// =========================

router.put("/reset-password", (req, res) => {

  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({
      message: "Email and new password are required."
    });
  }

  const sql = `
    UPDATE users
    SET password = ?
    WHERE email = ?
  `;

  db.query(
    sql,
    [newPassword, email],
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Database error."
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "No account found with this email."
        });
      }

      res.json({
        message: "Password updated successfully."
      });

    }
  );

});
module.exports = router;