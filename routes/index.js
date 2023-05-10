const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Get Home Page
router.get('/', function(req, res, next) {
    res.render('index',{ projects }) ;
});
// Get project Page
router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({id})=> id === +projectId );
    if (project) {
        res.render('project',{ project });
    } else {
        const err = new Error();
        err.status = 404;
        err.message = "Looks like the project you requested doesn't exist.";
        next(err);
    }
});

// Get undefined  Page
router.get('/noroute', function(req, res, next) {
    err.status = 500;
    next(err);
});

router.get('/projects/noroute', function(req, res, next) {
    err.status = 500;
    next(err);
});

//Get about page
router.get('/about', function(req, res, next) {
    res.render('about',{ projects }) ;
});

// Export module
module.exports = router;


