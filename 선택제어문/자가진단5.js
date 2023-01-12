/*
문제) 두 개의 실수를 입력받아 모두 4.0 이상이면 "A", 모두 3.0 이상이면 "B", 아니면 "C" 라고 출력하는 프로그램을 작성하시오.

입력예) 4.3 3.5
출력예) B
*/

function grade(a, b) {
  if ((a >= 4.0) & (b >= 4.0)) {
    console.log('A');
  } else if ((a >= 3) & (b >= 3)) {
    console.log('B');
  } else console.log('C');
}

grade(4.3, 3.5);
