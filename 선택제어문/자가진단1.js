/*
문제) 정수를 입력받아 첫 줄에 입력 받은 숫자를 출력하고 둘째 줄에 음수이면 "minus" 라고 출력하는 프로그램을 작성하시오.
입력예) -5
출력예) -5
         minus
*/

function practice(el) {
  console.log(el);
  if (el < 0) {
    console.log('minus');
  }
}

practice(5);
