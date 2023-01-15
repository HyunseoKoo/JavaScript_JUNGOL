// 아래의 메뉴에서 선택한 메뉴를 알려주는 프로그램을 작성하시오.

/*
입력예)
1. 삽입
2. 수정
3. 삭제
숫자를 선택하세요. 2

출력예)
수정을 선택하셨습니다.

*/

let num = 2;

switch (num) {
  case 1:
    console.log('삽입을 선택하셨습니다.');
    break;
  case 2:
    console.log('수정을 선택하셨습니다.');
    break;
  case 3:
    console.log('삭제를 선택하셨습니다.');
    break;
  default:
    console.log('None');
}
