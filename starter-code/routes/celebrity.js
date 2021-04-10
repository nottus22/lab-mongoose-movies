const express = require('express');
const router  = express.Router();

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const userCheck = require('../configs/user-check.config');


router.get('/celebrities', (req, res, next) => {
    console.log('query', req.query);
    Celebrity.find({})
    .then((celebritiesFromDB) => {
        res.render('celebrities/index.hbs', { celebritiesFromDB });
    })
    .catch((error) => next(error));
});

router.get('/celebrities/new', (req, res, next) => {
    Movie.find({})
    .then((moviesFromDB) => {
        res.render('celebrities/new.hbs', { movies: moviesFromDB });
    })
})

router.post('/celebrities', userCheck, (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    Celebrity.create(req.body)
        .then(() => {
            res.redirect('/celebrities');
        })
        .catch((error) => next(error));
});

router.get('/celebrities/:id', (req, res, next) => {
    Celebrity.findById(req.params.id)
        .populate('movies')
        .then((celebrityFromDB) => {
            res.render('celebrities/show', { celebrity: celebrityFromDB });
        })
        .catch((error) => next(error));
});

router.post('/celebrities/:id/delete', userCheck, (req, res, next) => {
    Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/celebrities');
    })
});

router.get('/celebrities/:id/edit', userCheck, (req, res, next) => {
    Celebrity.findById(req.params.id)
    .then((celebrityFromDB) => {
        res.render('celebrities/edit'. celebrityFromDB);
    })
    .catch((error) => next(error));
});

router.post('/celebrities/:id/edit', (req, res, next) => {
    console.log(req.body);
    Celebrity.findByIdAndUpdate(req.params.id, req.body).then((response) => {
      console.log('response', response);
      res.redirect('/celebrities');
    });
  });

module.exports = router