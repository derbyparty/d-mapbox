module.exports = function(app, options) {
  var Map = require('./map');
  Map.prototype.options = options;
  app.component(Map);
};