// 문제) 두 개의 정수를 입력받아 큰 수에서 작은 수를 뺀 차를 출력하는 프로그램을 작성하시오.
// 입력예) 50 85
// 출력예) 35

function compare(a, b) {
  if (a > b) {
    c = a - b;
    console.log(c);
  } else {
    c = b - a;
    console.log(c);
  }
}

compare(50, 85);
compare(85, 50);
