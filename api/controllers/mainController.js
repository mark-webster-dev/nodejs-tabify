'use strict';

var tabify = require('es-tabify');

exports.tabify = function(req, res) {
    console.log("%s:  Processing request from: %s", new Date() , req.connection.remoteAddress);
    var data = tabify(req.body);  
    res.send(data);
};



