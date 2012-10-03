
/**
 * Dependencies
 */

var color = require('component-color')
  , parse = require('component-color-parser');

/**
 * Expose `color`
 */

module.exports = color;

/**
 * Expose `parse`
 */

color.parse = parse;

/**
 * Return a random color
 */

color.random = function() {
  return color.rgba(rand(), rand(), rand(), 1);
};

/**
 * Get either white or black depending on the color
 */

color.getInverse = function(color) {
  var yiq = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
  return (yiq >= 128) ? color.rgba(0, 0, 0, 1) : color.rgba(255, 255, 255, 1);
};

/**
 * Rand Number from 1-255
 */

function rand() {
  return parseInt(Math.random() * 255, 10) + 1;
}
