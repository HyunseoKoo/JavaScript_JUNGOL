/*
문제)
복싱체급은 몸무게가 
50.80kg 이하를 Flyweight, 
61.23kg 이하를 Lightweight, 
72.57kg 이하를 Middleweight, 
88.45kg 이하를 Cruiserweight, 
88.45kg 초과를 Heavyweight
라고 하자.
몸무게를 입력받아 체급을 출력하는 프로그램을 작성하시오.

입력예) 87.3
출력예) Cruiserweight
*/

function weight(a) {
  let grade;
  if (a <= 50.8) {
    grade = 'Flyweight';
  } else if (a <= 61.23) {
    grade = 'Lightweight';
  } else if (a <= 72.57) {
    grade = 'Middleweight';
  } else if (a <= 88.45) {
    grade = 'Cruiseweight';
  } else grade = 'Heavyweight';
  console.log(grade);
}

weight(87.3);
