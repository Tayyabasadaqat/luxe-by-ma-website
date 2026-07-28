const express = require("express");
const router = express.Router();
const db = require("../config/db");


// GET USER CART
router.get("/:userId", (req,res)=>{

    const userId = req.params.userId;

    const sql = `
    SELECT 
    products.*,
    cart.quantity
    FROM cart
    JOIN products 
    ON cart.product_id = products.id
    WHERE cart.user_id = ?
    `;

    db.query(sql,[userId],(err,result)=>{

        if(err)
            return res.status(500).json(err);

        res.json(result);

    });

});



// ADD TO CART

router.post("/",(req,res)=>{

const {
    user_id,
    product_id,
    quantity
}=req.body;


const sql=`
INSERT INTO cart(user_id,product_id,quantity)
VALUES(?,?,?)
ON DUPLICATE KEY UPDATE quantity=quantity+1
`;


db.query(
sql,
[user_id,product_id,quantity],
(err,result)=>{

if(err)
return res.status(500).json(err);


res.json({
message:"Added to cart"
});


});


});


module.exports = router;