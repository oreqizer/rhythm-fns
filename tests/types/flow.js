/* @flow */
import * as fns from 'rhythm-fns';


// getBoxHeight
// ---

fns.getBoxHeight(1, 1, 1);
// $FlowExpected
fns.getBoxHeight('1', 1, 1);
// $FlowExpected
fns.getBoxHeight(1, '1', 1);
// $FlowExpected
fns.getBoxHeight(1, 1, '1');

let n: number = fns.getBoxHeight(1, 1, 1);
// $FlowExpected
let s: string = fns.getBoxHeight(1, 1, 1);

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

n = fns.getBoxMargin(1, 1, 1, 1);
// $FlowExpected
s = fns.getBoxMargin(1, 1, 1, 1);

// getLineHeight
// ---

fns.getLineHeight(1, 1, 1);
// $FlowExpected
fns.getLineHeight('1', 1, 1);
// $FlowExpected
fns.getLineHeight(1, '1', 1);
// $FlowExpected
fns.getLineHeight(1, 1, '1');

n = fns.getLineHeight(1, 1, 1);
// $FlowExpected
s = fns.getLineHeight(1, 1, 1);

// getLineMargin
// ---

fns.getLineMargin(1, 1, 1);
fns.getLineMargin(1, 1, 1, 1);
// $FlowExpected
fns.getLineMargin('1', 1, 1);
// $FlowExpected
fns.getLineMargin(1, '1', 1);
// $FlowExpected
fns.getLineMargin(1, 1, '1');
// $FlowExpected
fns.getLineMargin(1, 1, 1, '1');

n = fns.getLineMargin(1, 1, 1);
// $FlowExpected
s = fns.getLineMargin(1, 1, 1);
