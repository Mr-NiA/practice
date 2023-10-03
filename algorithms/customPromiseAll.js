const firstPromise = new Promise((resolve) => resolve("first"));
const secondPromise = new Promise((resolve) => resolve("second"));

Promise.customAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    for (let index = 0; index < promises.length; index++) {
      const item = promises[index];

      item
        .then((result) => {
          results.push(result);

          if (results.length === promises.length) resolve(results);
        })
        .catch(reject);
    }

    return results;
  });
};

Promise.customAll([firstPromise, secondPromise]).then((response) =>
  console.log("END", response)
);
