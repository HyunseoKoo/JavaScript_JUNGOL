/*
문제) 입력받은 점수를 “ABCDF”로 평가하는 프로그램을 작성하시오.

입력예) 점수를 입력하세요. 89
출력예) B
*/

// let a = 89;
// let point;

// if (90 <= a) {
//   point = 'A';
// } else if (a >= 80) {
//   point = 'B';
// } else if (a >= 70) {
//   point = 'C';
// } else if (a >= 60) {
//   point = 'D';
// } else {
//   point = 'F';
// }

// console.log(point);

function test(a) {
  let point;
  if (90 <= a) {
    point = 'A';
  } else if (a >= 80) {
    point = 'B';
  } else if (a >= 70) {
    point = 'C';
  } else if (a >= 60) {
    point = 'D';
  } else {
    point = 'F';
  }
  console.log(point);
}

test(89);
