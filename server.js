const express = require('express')
var fs = require('fs');
var bodyParser = require('body-parser')
var cors = require('cors');

const app = express()
const port = 4000

var whitelist = [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://localhost:4000',
    'https://localhost:4000'
]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.sendStatus(status);
  //res.render('error');
});

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }

    fs.readFile(__dirname + '/build/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

app.get('/api/test', (request, response) => {

    console.log('test');
    response.send('test')

});

app.get('/api/fetchAllPosts', (request, response) => {
    const file = fs.readdirSync('./docs/posts/')
    .then(() => response.send(file))
    //response.send(file)
});

app.get('/api/fetchPost/:id', (request, response) => {
    const file = fs.readFileSync(`./docs/posts/${request.params.id}`)
    .then(() => response.send(file))
    // response.send(file)
});

app.listen(port, () => {
  console.log(`App listening port:${port}`)
})
