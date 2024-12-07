var express = require('express')
var router = express.Router();

router.get('/get-std',(req,res,next)=>{
    console.log("this isthe sererver side get student details sapi")
    res.send("sever get call success")
})

module.exports = router;