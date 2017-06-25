/* @flow */
import * as fns from 'rhythm-fns';

// getBoxMargin
// ---

fns.getBoxMargin(1, 1, 1, 1);
// $FlowExpected
fns.getBoxMargin('1', 1, 1, 1);
// $FlowExpected
fns.getBoxMargin(1, '1', 1, 1);
// $FlowExpected
fns.getBoxMargin(1, 1, '1', 1);
// $FlowExpected
fns.getBoxMargin(1, 1, 1, '1');

let n: number = fns.getBoxMargin(1, 1, 1, 1);
// $FlowExpected
let s: string = fns.getBoxMargin(1, 1, 1, 1);

// getLines
// ---

fns.getLines(1, 1, 1);
// $FlowExpected
fns.getLines('1', 1, 1);
// $FlowExpected
fns.getLines(1, '1', 1);
// $FlowExpected
fns.getLines(1, 1, '1');

n = fns.getLines(1, 1, 1);
// $FlowExpected
s = fns.getLines(1, 1, 1);
