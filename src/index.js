'use strict';

function ceilLines(baseLineRatio, scale) {
  if (scale <= 0) {
    return 0;
  }

  return Math.ceil(Math.max(scale, 1) / baseLineRatio) * baseLineRatio;
}

function halfExtraMargin(baseLineRatio, scale) {
  var lines = Math.ceil(scale / baseLineRatio);
  var height = baseLineRatio * scale;
  var leftover = height - (baseLineRatio * lines);

  return leftover / 2;
}

// =======
// = API =
// =======

/**
 * Calculates the height to apply to an element that uses height.
 * @param baseFontSize - ratio between the base font size and line height
 * @param baseLineRatio - absolute base font size used across the page
 * @param heightScale - your element's desired height relative to the base line height
 * @returns {number} - absolute height to apply to your element
 */
function getBoxHeight(baseFontSize, baseLineRatio, heightScale) {
  return baseFontSize * baseLineRatio * heightScale;
}

/**
 * Calculates the margin to apply to an element that uses height.
 * @param baseFontSize - ratio between the base font size and line height
 * @param baseLineRatio - absolute base font size used across the page
 * @param heightScale - your element's desired height relative to the base line height
 * @param margins - extra margins relative to the base font size
 * @returns {number} - absolute margin to apply to your element
 */
function getBoxMargin(baseFontSize, baseLineRatio, heightScale, margins) {
  var fill = halfExtraMargin(baseLineRatio, heightScale);
  var lines = ceilLines(baseLineRatio, margins * baseLineRatio);

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
  return ceilLines(baseLineRatio, fontSize) * baseFontSize;
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
  var base = ceilLines(baseLineRatio, margins * baseLineRatio) * baseFontSize;

  return base - border;
}


module.exports = {
  getBoxHeight: getBoxHeight,
  getBoxMargin: getBoxMargin,
  getLineHeight: getLineHeight,
  getLineMargin: getLineMargin
};
