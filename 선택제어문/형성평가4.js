/*
문제)
1번은 개, 2번은 고양이, 3번은 병아리로 정하고 번호를 입력하면 번호에 해당하는 동물을 영어로 출력하는 프로그램을 작성하시오.
해당 번호가 없으면 "I don't know."라고 출력한다.
개-dog
고양이-cat
병아리-chick​ 

입력예) Number? 2
출력예) cat
*/

// function animal(a) {
//   if (a == 1) {
//     console.log('dog');
//   }
//   if (a == 2) {
//     console.log('cat');
//   }
//   if (a == 3) {
//     console.log('chick');
//   }
// }
// animal(3);

let a = 2;

switch (a) {
  case 1:
    console.log('dog');
    break;
  case 2:
    console.log('cat');
    break;
  case 3:
    console.log('chick');
    break;
}
