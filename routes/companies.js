import express from 'express';
import Company from'../db/models/company'
let router = express.Router();

/* GET home page. */

router.post('/', (req, res, next) => {

    const company = new Company({
        name: req.body.name
    });

    company.save().then((doc) =>{
        res.send(doc);
    },(e)=>{
        res.send(e)
    });
});

export default router;