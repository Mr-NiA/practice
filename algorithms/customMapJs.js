const collection = ["Samara", "Moscow", "SPB", "Kazan"];

Array.prototype.customMap = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }

  return result;
};

console.log(collection.customMap((item, index) => item + index));
