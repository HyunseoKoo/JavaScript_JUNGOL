// 문제) 알파벳 'A'부터 'Z'까지 출력하는 프로그램을 작성하시오.
// 출력예) ABCDEFGHIJKLMNOPQRSTUVWXYZ

// String.fromCharCode() - 입력받은 유니코드를 해당 유니코드가 의미하는 문자열로 변환하기
// String.prototype.charCodeAt() - 문자열을 대상으로 사용하는 메서드이며 해당 문자열의 특정 인덱스 문자값이 의미하는 유니코드 값을 반환해줌
// 아스키코드 A:65 / Z:90

// A~Z 출력
for (i = 65; i < 91; i++) {
  const a = String.fromCharCode(i);
  console.log(a);
}

// 배열로 담기
let arr = new Array();
// let arr = [];
for (i = 65; i < 91; i++) {
  const a = String.fromCharCode(i);
  arr.push(a);
}
console.log(arr);
