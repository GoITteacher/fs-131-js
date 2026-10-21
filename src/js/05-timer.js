//!=========================================

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const clockface = document.querySelector('.js-clockface');

//!=========================================
const timer = {
  intervalId: null,

  start() {
    console.log('START');
    const initTime = new Date();

    this.intervalId = setInterval(() => {
      const currentTime = new Date();
      const diff = currentTime - initTime;
      const time = msToTime(diff);
      clockface.textContent = time;
    }, 1000);
  },

  stop() {
    console.log('STOP');
    clearInterval(this.intervalId);
    clockface.textContent = '00:00:00';
  },
};

//!=========================================

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  timer.stop();
});

//!=========================================

function msToTime(s) {
  let ms = s % 1000;
  s = (s - ms) / 1000;
  let secs = s % 60;
  s = (s - secs) / 60;
  let mins = s % 60;
  let hrs = (s - mins) / 60;

  const sec = secs.toString().padStart(2, '0');
  const m = mins.toString().padStart(2, '0');
  const h = hrs.toString().padStart(2, '0');

  return h + ':' + m + ':' + sec;
}
