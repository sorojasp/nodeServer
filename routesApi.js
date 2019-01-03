const express= require('express');
const router =express.Router();
router.get('/',function(req,res){

    res.json({

        miPrimerApi:'works'
    });
});

module.exports=router;