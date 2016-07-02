let express = require('express')
let request = require('request')
let bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer(); // for parsing multipart/form-data

export let app = express();

app.route('/api/products')
    .get((req, res) => {
        res.status(200).json([
            {
                name: 'Mufasa',
                age: 2
            }, {
                name: 'Simba',
                age: 12
            }, {
                name: 'Kitty',
                age: 12
            }]);
    });

/** Express specifics */
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//CORS middleware
let allowCrossDomain = (req, res, next) => {
    var oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if (oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
}
app.use(allowCrossDomain);

//Logs time since epoch + method + url
let timeLog = (req, res, next) => {
    console.log(Date.now(), req.method, req.path);
    next();
}
app.use(timeLog);





