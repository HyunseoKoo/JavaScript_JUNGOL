/*
문제) 나이를 입력받아 20살 이상이면 "adult"라고 출력하고 그렇지 않으면 몇 년후에 성인이 되는지를 "○ years later"라는 메시지를 출력하는 프로그램을 작성하시오.

입력예) 18
출력예) 2 years later
*/

function age(a) {
  if (a >= 20) {
    console.log('adult');
  }
  if (a < 20) {
    const later = 20 - a;
    console.log(`${later} years later`);
  }
}
age(18);
