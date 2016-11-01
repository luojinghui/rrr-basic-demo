/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/9/1
 * Time: 下午12:46
 */
var express = require('express');

var app = new (require('express'))();
var port = 3000;

app.use(express.static('./dist/'));

app.get("/index", function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> Listening on port %s", port, port)
    }
})
