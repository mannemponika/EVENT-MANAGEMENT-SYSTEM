const express1=require('express');

const detailsRouter=express1.Router();

const detail=require('../Models/details');

detailsRouter.route('/results').get((req,res,next) => {
    detail.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

detailsRouter.route('/adduser').post((req,res,next) => {
    detail.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

detailsRouter.route('getorders/:email').get((req,res,next) => {
    detail.find({email: req.body.email})
    .then((resp) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err) => next(err))
    .catch((err) => next(err));
})

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

detailsRouter.route('/delete/:id').delete((req,res,next) =>{
    detail.findByIdAndDelete(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

detailsRouter.route('/getuser/:email/:password').get((req,res,next) => {
    detail.find({email: req.params.email,password : req.params.password})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = detailsRouter;