const throttle = (callback, timedown) => {
  let lastCall;

  return function (...args) {
    let previousCall = lastCall;
    lastCall = Date.now();

    const isActive =
      previousCall === undefined || lastCall - previousCall > timedown;

    if (isActive) callback(...args);
  };
};

const logger = (args) => console.log(`My args are ${args}`);

let throttledLogger = throttle(logger, 2);

throttledLogger([1, 2, 3]);
throttledLogger([2, 2, 3]);
throttledLogger([3, 2, 3]);
throttledLogger([4, 2, 3]);
throttledLogger([5, 2, 3]);
