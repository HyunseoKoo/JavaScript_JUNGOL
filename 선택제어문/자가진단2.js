/*
문제) “몸무게+100-키”를 비만수치 공식이라고 하자.
키와 몸무게를 자연수로 입력받아 첫 번째 줄에 비만수치를 출력하고, 
비만수치가 0보다 크면 다음줄에 비만("Obesity")이라는 메시지를 출력하는 프로그램을 작성하시오. (출력형식은 아래 출력 예를 참고하세요.)

입력예) 155 60
출력예)
5
Obesity
 */

function heavy(height, weight) {
  const heavyTest = weight + 100 - height;
  console.log(heavyTest);
  if (heavyTest > 0) {
    console.log('Obesity');
  }
}

heavy(155, 60);
