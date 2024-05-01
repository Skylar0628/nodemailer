var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
router.get('/', function(req, res) {
    res.render('contact');
});
router.get('/review', function(req, res) {
    res.render('contactReview');
});
router.post('/post', function(req, res) {
    // 請修改 15、16、21 行
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: 'a0903131602@gmail.com',
            pass: 'ejsy akfw zasr hwuh'
        }
    });
    var mailOptions = {
        form: '"六角學院"<service@hexschool.com>',
        to :'a0903131602@gmail.com',
        subject: '寄信練習',
        text: '你好'
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            return console.log(error);
        }
        res.redirect('review');
    })
});
module.exports = router;
