const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

/* Instantiate Express app */
var app = express();

/* Setup view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Add static middleware
app.use('/static',express.static('public'));
app.use('/', indexRouter); 

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log('404 error handler called');
  res.status(404).render('page-not-found');
});

/* Global error handler */
app.use((err, req, res, next) => {

  if (err) {
    console.log('Global error handler called', err);
  }
  if (err.status === 404) {
    res.status(404).render('page-not-found',{err});

  } else {
    err.message = err.message || 'Opps! It looks like something went wrong on the server' ;
    res.status(err.status || 500).render('error',{err});
  } 
});



  





