/* eslint-disable eol-last */
/* eslint-disable function-call-argument-newline */
/* eslint-disable no-console */
const intervalId = setInterval(() => {
  console.log('Sending analytics data...');
},
// eslint-disable-next-line no-magic-numbers
2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});