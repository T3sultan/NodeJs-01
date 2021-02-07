const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('pages/buckets');
});

module.exports=router;