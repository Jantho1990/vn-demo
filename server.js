var express = require('express');

// Create our app.
var app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use('/fonts', express.static('fonts'));
app.use('/style', express.static('style'));

app.listen(port, function () {
    console.log('Server fired up on', port);
});
