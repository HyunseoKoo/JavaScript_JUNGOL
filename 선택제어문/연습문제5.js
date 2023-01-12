/*
문제)
주사위를 두 번 던져서 나온 수를 입력받아 
두 수가 모두 4 이상이면 “이겼습니다.” 
한 개만 4 이상이면
“비겼습니다.” 
모두 4 미만이면 “졌습니다.”
라고 출력하는 프로그램을 작성하시오. 

입력예) 주사위를 던진 결과를 입력하세요. 3 4
출력예) 비겼습니다.
*/

function jusawi(a, b) {
  if ((a >= 4) & (b >= 4)) {
    console.log('이겼습니다.');
  } else if (a >= 4 || b >= 4) {
    console.log('비겼습니다.');
  } else if ((a < 4) & (b < 4)) {
    console.log('졌습니다.');
  }
}

jusawi(3, 4); // 비겼습니다.
jusawi(4, 4); // 이겼습니다.
jusawi(3, 2); // 졌습니다.
