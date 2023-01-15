// 문제) 두 개의 정수를 입력받아 조건연산자를 이용하여 두 수중 큰 수를 출력하는 프로그램을 작성하시오.
// 입력예) 89 100
// 출력예) 100

function bigOne(a, b) {
  if (a == b) {
    return;
  } else if (a > b) {
    console.log(a);
  } else console.log(b);
}

bigOne(89, 100);
