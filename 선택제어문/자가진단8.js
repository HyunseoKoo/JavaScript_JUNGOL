/*
문제)
4.5 이하의 평점을 입력받아 그 값에 따라 다음과 같이 출력하는 프로그램을 작성하시오.
(C, C++, Java는 switch ~ case문 사용) (Python은 if ~ else사용)
단 입력는 0이상 4.5 이하이다.

4.0 이상 : "scholarship"
3.0 이상 : "next semester"
2.0 이상 : "seasonal semester"
2.0 미만 : "retake"​
 
>> 실수를 정수형(int)으로 변환하여 분기한다. (예 - switch( (int)score ))

입력예) 3.5
출력예) next semester
 */

let a;
0 <= a;
a <= 4.5;

function grade(a) {
  if (4.0 <= a && a <= 4.5) {
    console.log('scholarship');
  } else if (3.0 <= a) {
    console.log('next semester');
  } else if (2.0 <= a) {
    console.log('seasonal semester');
  } else if (0 <= a && a < 2.0) {
    console.log('retake');
  }
}

grade(3.5);
