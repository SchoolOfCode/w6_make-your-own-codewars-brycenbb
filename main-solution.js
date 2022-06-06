/*
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code

XXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXX

Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code
Dont look in here, it has the solution code




function objectArraySum(input) {
  if (!Array.isArray(input)) {
    return 0;
  }
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].boolean === false) {
      continue;
    }
    !Array.isArray(input[i].numbers);
    if (!Array.isArray(input[i].numbers)) {
      continue;
    }
    for (let x = 0; x < input[i].numbers.length; x++) {
      if (typeof input[i].numbers[x] != 'number') {
        break;
      }
      temp += input[i].numbers[x];
    }
    if (temp > sum) {
      sum = temp;
    }
    temp = 0;
  }
  return sum;
}








*/
