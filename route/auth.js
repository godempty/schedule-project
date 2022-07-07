const router = require('express').Router();

router.post('/user', (req,res) => {
    res.send('use');
});

module.exports = router;