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
 * @param baseLineRatio - absolute base font size used across the page
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
 * Calculates the line height to apply to a text element.
 * @param baseFontSize - relative ratio between the base font size and line height
 * @param baseLineRatio - absolute base font size used across the page
 * @param fontSize - desired font size relative to the base font size
 * @returns {number} - absolute line height to apply to your element
 */
function getLineHeight(baseFontSize, baseLineRatio, fontSize) {
  return roundLines(baseLineRatio, fontSize) * baseFontSize;
}

/**
 * Calculates the margin to apply to a text element.
 * @param baseFontSize - ratio between the base font size and line height
 * @param baseLineRatio - absolute base font size used across the page
 * @param margins - extra margins relative to the base font size
 * @param maybeBorder - (optional) absolute border to subtract from the result
 * @returns {number} - absolute margin to apply to your element
 */
function getLineMargin(baseFontSize, baseLineRatio, margins, maybeBorder) {
  var border = maybeBorder || 0;
  var base = roundLines(baseLineRatio, margins) * baseFontSize;

  return base - border;
}


module.exports = {
  getBoxMargin: getBoxMargin,
  getLineHeight: getLineHeight,
  getLineMargin: getLineMargin
};
