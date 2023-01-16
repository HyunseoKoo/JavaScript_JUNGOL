// 문제) 1부터 15까지 차례로 출력하는 프로그램을 작성하시오. while문을 이용하세요.
// hint) int 변수를 선언하고 초기값으로 1을 대입한다.
// 출력예) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

let count = 1;
while (count < 16) {
  console.log(count);
  count++;
}

// 배열로 담기
let arr = [];
let count2 = 1;
while (count2 < 16) {
  arr.push(count2);
  count++;
}

console.log(arr);
