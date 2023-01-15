// 문제) 3개의 정수를 입력받아 조건연산자를 이용하여 입력받은 수들 중 최소값을 출력하는 프로그램을 작성하시오.
// 입력예) 18 -5 10
// 출력예) -5

function min(a, b, c) {
  if (a > b) {
    if (b > c) {
      console.log(c);
    } else console.log(b);
  } else if (a > c) {
    console.log(c);
  } else console.log(a);
}

min(18, -5, 10);
min(18, 10, -5);
min(-5, 18, 10);
min(-5, 10, 18);
min(10, 18, -5);
min(10, -5, 18);
