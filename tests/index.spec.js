const test = require('tape');

const fns = require('../src');


test('getBoxMargin', (t) => {
  t.equal(fns.getBoxMargin(16, 1.5, 2, 2), 48, 'round height, round margin');
  t.equal(fns.getBoxMargin(16, 1.5, 2, 0.75), 24, 'round height, fraction margin');

  // 6 is half of an extra margin
  t.equal(fns.getBoxMargin(16, 1.5, 3.5, 2), 48 + 6, 'fraction height, round margin');
  t.equal(fns.getBoxMargin(16, 1.5, 3.5, 0.75), 24 + 6, 'fraction height, fraction margin');
  t.end();
});

test('getLines', (t) => {
  t.equal(fns.getLines(16, 1.5, 2), 48, 'larger, round');
  t.equal(fns.getLines(16, 1.5, 1.125), 24, 'larger, fraction');
  t.equal(fns.getLines(16, 1.5, 0.5), 24, 'smaller');
  t.end();
});
