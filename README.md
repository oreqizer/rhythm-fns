# Rhythm fns

Functions useful for calculating vertical rhythm. :musical_note:

## API

The entire package exports just these 3 pure functions.

### getBoxMargin

Calculates the margin to apply to an element that uses height.

**Params**

 * `baseFontSize` - ratio between the base font size and line height
 * `baseLineRatio` - absolute base font size used across the page
 * `heightScale` - your element's desired height relative to the base font size
 * `margins` - extra margins relative to the base font size

Returns the absolute margin to apply to your element

### getLineHeight

Calculates the line height to apply to a text element.

**Params**

 * `baseFontSize` - relative ratio between the base font size and line height
 * `baseLineRatio` - absolute base font size used across the page
 * `fontSize` - desired font size relative to the base font size
 
Returns absolute line height to apply to your element

### getLineMargin

Calculates the margin to apply to a text element.

**Params**

 * `baseFontSize` ratio between the base font size and line height
 * `baseLineRatio` absolute base font size used across the page
 * `margins` extra margins relative to the base font size
 * `maybeBorder` (optional) absolute border to subtract from the result

Returns absolute margin to apply to your element

## License

MIT
