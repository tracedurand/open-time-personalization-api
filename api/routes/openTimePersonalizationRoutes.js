module.exports = function(app) {
  var openTimePersonalization = require('../controllers/openTimePersonalizationController');

  // todoList Routes
  app.route('/getEventImage')
    .get(openTimePersonalization.getEventImage)
};