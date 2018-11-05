const { progressBar } = require('@ngmikeng/node-console-rateprogressbar');

const total = 100;
let currentProgress = 0;
const inter = setInterval(() => {
  currentProgress++;
  const curRate = currentProgress / total;
  if (currentProgress <= total) {
    progressBar(curRate, { label: 'Loading: ', symbol: '#'});
  } else {
    clearInterval(inter);
    console.log('\n');
  }
}, 100);