'use strict';
module.exports = function(app) {
  var tab = require('../controllers/mainController');

  app.route('/tabify')
    .post(tab.tabify);

};
