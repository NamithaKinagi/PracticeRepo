function checkExam(array1, array2) {
  let numberOfQs = array1.length;
  let result = 0;
  for (let i = 0; i < numberOfQs; i++) {
    if (array2[i] === "") {
      continue;
    } else if (array1[i] === array2[i]) {
      result += 4;
    } else {
      result -= 1;
    }
  }

  return Math.max(result, 0);
}
