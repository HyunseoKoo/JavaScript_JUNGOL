/*
문제) 정수 3개를 입력 받아 그중 가장 큰 수를 출력하는 프로그램을 작성하시오. 

입력예) 세 수를 입력하세요. 1 5 4
출력예) 입력받은은 수중 가장 큰 수는 5입니다.
*/

// function Most(a, b, c) {
//   console.log(Math.max(a, b, c));
// }

// Most(1, 5, 4);

function Most(a, b, c) {
  if (a > b) {
    console.log(a);
  } else if (b > c) {
    console.log(b);
  } else console.log(c);
}
Most(1, 5, 4);
Most(4, 5, 1);
Most(1, 4, 5);
Most(5, 1, 4);
