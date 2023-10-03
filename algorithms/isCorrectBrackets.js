// Необходимо написать функцию, которая будет проверять соответствие скобок разных видов: [], {}, ().

const isCorrectBrackets = (value) => {
  const brackets = {
    "[": "[",
    "]": "]",
    "{": "{",
    "}": "}",
    "(": "(",
    ")": ")",
  };

  const result = [];

  const searchBrackets = {
    "]": "[",
    "}": "{",
    ")": "(",
  };

  const bracketsCollection = value.split("").filter((item) => brackets[item]);

  bracketsCollection.forEach((item) => {
    result.push(item);

    const isCorrectSize = result.length > 1;
    const isPop = result[result.length - 2] === searchBrackets[item];

    if (isCorrectSize && isPop) {
      result.pop();
      result.pop();
    }
  });

  return result.length === 0;
};

console.log(isCorrectBrackets("[{}]")); // true
console.log(isCorrectBrackets("вав([вав]{}вава)")); // true
console.log(isCorrectBrackets("[({)}]")); // false
console.log(isCorrectBrackets("Hello ([]) world!")); // true
console.log(isCorrectBrackets("Hello (([]) world!")); // false
