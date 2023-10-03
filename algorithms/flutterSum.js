function fn(arr) {
  const flattten = arr.flat(Infinity);

  return flattten.reduce((acc, curr) => {
    return acc += (parseInt(curr, 10) || 0);
  }, 0);
}

console.log(fn([1, ["x", "2x", ["x2", "5", 3]]])); // 11
