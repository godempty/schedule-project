const router = require('express').Router();
const { validate } = require('../model/User');
const User = require('../model/User');
const { loginValidation } = require('../validation');
const {registerValidation} = require('../validation');

router.post('/register', async (req,res) => {

    // 驗證資料
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // 檢查是否有創建過的使用者
    const emailExist = await User.findOne({
        email: req.body.email
    })
    if(emailExist) return res.status(400).send('Email already existed')

    // 創建使用者
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    // 報錯
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }

});

router.post('/login', (req,res) => {
    res.send('登入');
});

module.exports = router;