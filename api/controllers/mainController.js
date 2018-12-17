'use strict';

var tabify = require('es-tabify');

exports.tabify = function(req, res) {
    var data = tabify(req.body);  
    res.send(data);
};



