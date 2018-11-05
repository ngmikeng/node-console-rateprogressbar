import { clearLine, cursorTo } from 'readline';

interface IOptions {
  label?: string,
  showPercentageProgress?: boolean,
  symbol?: string
}

const getBar = (length: number, char: string): string => {
  let bar = '';
  for (let i = 0; i < length; i++) {
    bar = bar + char;
  }
  return bar;
}

export const progressBar = (currentRate: number, opts?: IOptions): void => {
  const defaultOpts = {
    label: 'Progress: ',
    showPercentageProgress: true,
    symbol: '='
  };
  opts = {...defaultOpts, ...opts};
  opts.symbol = opts.symbol && typeof opts.symbol === 'string' && opts.symbol.trim() !== '' ? opts.symbol.trim()[0] : '=';
  opts.label = opts.label && typeof opts.label === 'string' ? opts.label : '';

  process.stdout.columns = process.stdout.columns ? process.stdout.columns : 200;
  const barLength = process.stdout.columns - 30;
  const filledBarLength = parseFloat((currentRate * barLength).toFixed(0));
  const emptyBarLength = barLength - filledBarLength;
  const filledBarProgress = getBar(filledBarLength, opts.symbol);
  const emptyBarProgress = getBar(emptyBarLength, ' ');
  const percentageProgress = (currentRate * 100).toFixed(2);

  clearLine(process.stdout, 0);
  cursorTo(process.stdout, 0);
  process.stdout.write(
    `${opts.label}` + 
    `[${filledBarProgress}${emptyBarProgress}]` +
    `${opts.showPercentageProgress ? ' | ' + percentageProgress : ''}%`
  );
}