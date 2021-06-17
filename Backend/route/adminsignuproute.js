const express1=require('express');

const adminSignupRouter=express1.Router();

const adminSignup=require('../Models/adminsignup');

adminSignupRouter.route('/getdetails').get((req,res,next) => {
    adminSignup.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

adminSignupRouter.route('/adduser').post((req,res,next) => {
    adminSignup.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

adminSignupRouter.route('/getUser/:email/:password').get((req,res,next) => {
    adminSignup.find({email: req.body.email, password: req.body.password})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// detailsRouter.route('/update/:email').put((req,res,next) => {
//     detail.findOneAndUpdate({email : req.params.email}, {
//         $set: req.body
//     }, { new: true })
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });


module.exports = adminSignupRouter;