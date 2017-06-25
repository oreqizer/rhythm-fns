# Rhythm fns

[![Build Status](https://travis-ci.org/oreqizer/rhythm-fns.svg?branch=master)](https://travis-ci.org/oreqizer/rhythm-fns)
[![codecov](https://codecov.io/gh/oreqizer/rhythm-fns/branch/master/graph/badge.svg)](https://codecov.io/gh/oreqizer/rhythm-fns)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)
[![npm](https://img.shields.io/npm/v/rhythm-fns.svg)](https://www.npmjs.com/package/rhythm-fns)

Functions useful for calculating vertical rhythm. :musical_note:

## API

The entire package exports just these 4 pure functions.

### getBoxHeight

Calculates the height to apply to an element that uses height.

 * `baseFontSize` - ratio between the base font size and line height
 * `baseLineRatio` - absolute base font size used across the page
 * `heightScale` - your element's desired height relative to the base line height

Returns the absolute height to apply to your element.

```js
import { getBoxHeight } from 'rhythm-fns';

const height = getBoxHeight(16, 1.5, 1.125); // height = 27
```

### getBoxMargin

Calculates the margin to apply to an element that uses height.

**Params**

 * `baseFontSize` - ratio between the base font size and line height
 * `baseLineRatio` - absolute base font size used across the page
 * `heightScale` - your element's desired height relative to the base line height
 * `margins` - extra margins relative to the base font size

Returns the absolute margin to apply to your element.

```js
import { getBoxMargin } from 'rhythm-fns';

const marginTop = getBoxMargin(16, 1.5, 2.5, 1); // marginTop = 30
const marginBot = getBoxMargin(16, 1.5, 2.5, 2); // marginBot = 54
```

### getLineHeight

Calculates the line height to apply to a text element.

**Params**

 * `baseFontSize` - relative ratio between the base font size and line height
 * `baseLineRatio` - absolute base font size used across the page
 * `fontSize` - desired font size relative to the base font size
 
Returns the absolute line height to apply to your element.

```js
import { getLineHeight } from 'rhythm-fns';

const height = getLineHeight(16, 1.5, 1.75); // height = 48
```

### getLineMargin

Calculates the margin to apply to a text element.

**Params**

 * `baseFontSize` ratio between the base font size and line height
 * `baseLineRatio` absolute base font size used across the page
 * `margins` extra margins relative to the base line height
 * `maybeBorder` (optional) absolute border to subtract from the result

Returns the absolute margin to apply to your element.

```js
import { getLineMargin } from 'rhythm-fns';

// without border
const marginTop = getLineMargin(16, 1.5, 1); // marginTop = 24
const marginBot = getLineMargin(16, 1.5, 2); // marginBot = 48

// with border
const marginBorderTop = getLineMargin(16, 1.5, 1, 1); // marginBorderTop = 23
const marginBorderBot = getLineMargin(16, 1.5, 2, 1); // marginBorderBot = 47
```

## License

MIT
