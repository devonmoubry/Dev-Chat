require('file-loader?emitFile=false!./index.html');
require('./stylesheets/app.scss'); /* This loads the css and forces the sass to compile... */
require('file-loader?emitFile=false!/Users/devon/Documents/tiy/day-21/webpack-starter-master/app/images/cake.jpg');
import app from './scripts/app.js';

app();
