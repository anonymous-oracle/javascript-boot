const button = document.querySelector('button');
const output = document.querySelector('p');

// PROMISES ARE USED TO MAKE THE NESTED CALLBACKS IN CODE LOOK MORE READABLE

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success);
    }, error => {
      reject(error);
    }, opts);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Done!'); // resolve can take any argument
    }, error => {
      reject(error);
    }, duration);
  });
  return promise;
};

// function trackUserHandler() {
//   let positionData;
//   getPosition().then(posData => {
//     positionData = posData;
//     return setTimer(2000);
//   }, err => {
//     console.log(err);
//   }
//   ).then(data => {
//     console.log(data, positionData);
//   },
//     err => {
//       console.log(err);
//     }
//   );
//   setTimer(0).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('Getting position...');
// }

//////////////////////////////////////////////////////////////////
// OR
//////////////////////////////////////////////////////////////////


// ALL catch BLOCKS ARE PLACED AFTER then BLOCKS SO THAT WHEN THERE IS AN ERROR, THE EXECUTION SKIPS TO A catch BLOCK SKIPPING ANY SUBSEQUENT
// EXECUTION OF OTHER then BLOCKS

// adding async keyword automatically wraps the function inside a promise and returns a promise object
async function trackUserHandler() {
  // let positionData;
  // await keyword waits for a promise to fail or execute and executes the next line only after
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(posData, timerData);
  // .then(posData => {
  //   positionData = posData;
  //   return setTimer(2000);
  // })
  // .then(data => {
  //   console.log(data, positionData);
  // }).catch(err => {
  //   console.log(err);
  // }
  // ).catch(err => {
  //   console.log(err);
  // })
  // setTimer(0).then(() => {
  //   console.log('Timer done!');
  // });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// // OTHER PROMISE FUNCTIONS
// // the first promise which finishes will be caught by the then block
// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//   console.log(data);
// });

// // all promises passed will be executed and the then block executes whith the data returned from all the promises
// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => console.log(promiseData));

// // specifies results for the result whether each promise was fulfilled or rejected
// Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => console.log(promiseData));

// let result=0;
// for (let index = 0; index < 1000000000; index++) {
// result+=index;
// }
// console.log(result);