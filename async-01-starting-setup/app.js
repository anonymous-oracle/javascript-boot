const button = document.querySelector('button');
const output = document.querySelector('p');

// PROMISES ARE USED TO MAKE THE NESTED CALLBACKS IN CODE LOOK MORE READABLE

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {

    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Done!'); // resolve can take any argument
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition().then(posData => {
    positionData = posData;
    return setTimer(2000);
  }).then(data => {
    console.log(data, positionData);
  });
  setTimer(0).then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);




// let result=0;
// for (let index = 0; index < 1000000000; index++) {
// result+=index;
// }
// console.log(result);