node-console-rateprogressbar
===
A simple function for showing a progress bar in node console.

## Setup

```
$ npm install @ngmikeng/node-console-rateprogressbar --save
```

## Example

```js
const { progressBar } = require('@ngmikeng/node-console-rateprogressbar');

const total = 100;
let currentProgress = 0;
const inter = setInterval(() => {
  currentProgress++;
  const curRate = currentProgress / total;
  if (currentProgress <= total) {
    const opts = { label: 'Loading: ', symbol: '#'};
    progressBar(curRate, opts);
  } else {
    clearInterval(inter);
    console.log('\n');
  }
}, 100);
```

## Options
- **label** (`string`): Show label on the left of progress bar, leave `null` or `undefined` for hiding.
- **symbol** (`string`): Define a symbol show on progress bar, default is `=`.
- **showPercentageProgress** (`boolean`): Show or hide percentage number, default `true`.

## License
MIT