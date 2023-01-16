// 문제) 정수를 입력받아 0 이면 "zero" 양수이면 "plus" 음수이면 "minus" 라고 출력하는 프로그램을 작성하시오.
// 입력예) 0
// 출력예) zero

function test(a) {
  if (a == 0) {
    console.log('zero');
  } else if (0 < a) {
    console.log('plus');
  } else console.log('minus');
}

test(0);
test(10);
test(-10);
