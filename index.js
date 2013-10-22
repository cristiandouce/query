/**
 * Module dependencies.
 */

var sizzle = require('sizzle');

/**
 * Return single match element by
 * `selector` and `context`
 *
 * @param {String} selector
 * @param {Element} context
 * @api public
 */

function one(selector, context) {
  var r;
  return r = sizzle(selector, context), r && r.length ? r[0] : null;
}

/**
 * Expose API
 */

module.exports = exports = one;
exports.all = sizzle;

