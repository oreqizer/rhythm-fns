'use strict';

function halfExtraMargin(baseLineRatio, scale) {
  var lines = Math.ceil(scale / baseLineRatio);
  var height = baseLineRatio * scale;
  var leftover = height - (baseLineRatio * lines);

  return leftover / 2;
}

function roundLines(baseLineRatio, scale) {
  var lines = Math.ceil(scale / baseLineRatio);

  return baseLineRatio * lines;
}

// =======
// = API =
// =======

/**
 * Calculates the margin to apply to an element that uses height.
 * @param baseFontSize - ratio between the base font size and line height
 * @param baseLineRatio - base font size used across the page
 * @param heightScale - your element's desired height relative to the base font size
 * @param margins - extra margins relative to the base font size
 * @returns {number} - absolute margin to apply to your element
 */
function getBoxMargin(baseFontSize, baseLineRatio, heightScale, margins) {
  var fill = halfExtraMargin(baseLineRatio, heightScale);
  var lines = roundLines(baseLineRatio, margins);

  return (fill + lines) * baseFontSize;
}

/**
 * Calculates the height of the lines to apply to an element.
 * @param baseFontSize - ratio between the base font size and line height
 * @param baseLineRatio - base font size used across the page
 * @param scale - desired scale relative to the base font size
 * @returns {number} - absolute line height to apply to your element
 */
function getLines(baseFontSize, baseLineRatio, scale) {
  return roundLines(baseLineRatio, scale) * baseFontSize;
}


module.exports = {
  getBoxMargin: getBoxMargin,
  getLines: getLines
};
