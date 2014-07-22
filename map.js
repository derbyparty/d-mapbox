var extend = require('extend');

module.exports = Maps;
function Maps() {}
Maps.prototype.name = 'Mapbox';
Maps.prototype.view = __dirname;

Maps.prototype.create = function (model, dom, options) {

  require('mapbox.js');

  // Merge options
  var defaultOptions = {
    mapTiles: 'https://api.tiles.mapbox.com/v3/examples.map-0l53fhk2.json',
    attribution: '',
    maxZoom: 6,
    minZoom: 1,
    continuousWorld: false,
    noWrap: true
  };

  options = extend(true, defaultOptions, options);

  var map = L.mapbox.map('mapbox-container', options.mapTiles, options)
    .setView([7.5, 7], 3);

  var canvasTiles = L.tileLayer.canvas();

  canvasTiles.drawTile = function(canvas, tilePoint, zoom) {
    var ctx = canvas.getContext('2d');
  };

  canvasTiles.addTo(map);
  map.zoomControl.setPosition('bottomright');

}