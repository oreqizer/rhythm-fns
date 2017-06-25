import test from 'tape';

import * as fns from '../math';


test('math', (t) => {
  t.equal(fns.boxMargin(1.5, 16, 2), 0, 'box margin - larger');
  t.equal(fns.boxMargin(1.5, 16, 0.5), 0.375 * 16, 'box margin - smaller');
  t.equal(fns.roundLines(1.5, 16, 2), 3 * 16, 'line height - larger');
  t.equal(fns.roundLines(1.5, 16, 1.125), 1.5 * 16, 'line height - larger');
  t.equal(fns.roundLines(1.5, 16, 0.5), 1.5 * 16, 'line height - larger');
  t.end();
});
