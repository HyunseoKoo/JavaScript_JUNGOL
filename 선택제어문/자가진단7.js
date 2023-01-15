/**
 문제)
영문 대문자를 입력받아 
'A'이면 “Excellent”, 
'B'이면 “Good”, 
'C'이면 “Usually”, 
'D'이면 “Effort”, 
'F'이면 “Failure”, 
그 외 문자이면 “error” 라고 출력하는 프로그램을 작성하시오.

입력예) B
출력예) Good
 */

function grade(a) {
  if (a == 'A') {
    console.log('Excellent');
  } else if (a == 'B') {
    console.log('Good');
  } else if (a == 'C') {
    console.log('Usually');
  } else if (a == 'D') {
    console.log('Effort');
  } else if (a == 'F') {
    console.log('Failure');
  }
}

grade('B');
