// 문제) 입력받은 점수를 "ABCDF"로 평가하는 프로그램을 작성하시오
// 입력예) 점수를 입력하세요. 92
// 출력예) A

function grade(a) {
  if (90 <= a) {
    console.log('A');
  } else if (a <= 90) {
    console.log('B');
  } else if (a <= 80) {
    console.log('C');
  } else if (a <= 70) {
    console.log('D');
  } else if (a <= 60) {
    console.log('F');
  }
}

grade(73);
