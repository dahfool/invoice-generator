import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('users', { title: 'bobbbbb' });
});

export default router;