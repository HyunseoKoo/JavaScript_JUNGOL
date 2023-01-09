// 문제) 화면에 다음과 같이 출력하는 프로그램을 작성하시오
// 출력 예)
/*
원주 = 5 * 2 * 3.140000 = 31.400000
넓이 = 5 * 5 * 3.140000 = 78.500000
*/

const a = 5;
let b = 2;
const c = (3.14).toFixed(6);
let d = a * b * c;
console.log(`원주 = ${a} * ${b} * ${c} = ${d.toFixed(6)}`);
b = 5;
const e = a * b * c;
console.log(`넓이 = ${a} * ${b} * ${c} = ${e.toFixed(6)}`);
