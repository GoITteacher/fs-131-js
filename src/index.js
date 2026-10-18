function mySuperFunction() {
  const mySuperPuperArray = [1, 2, 3, 45, 1];
  const userResult = mySuperPuperArray.map(elementFromMyArray => {
    return elementFromMyArray * elementFromMyArray;
  });
  return userResult;
}

const result = mySuperFunction();

console.log(result);
