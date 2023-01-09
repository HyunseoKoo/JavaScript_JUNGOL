// 1야드(yd)는 91.44cm이고 1인치(in)는 2.54cm이다.
// 2.1야드와 10.5인치를 각각 cm로 변환하여 다음 형식에 맞추어 소수 첫째자리까지 출력하시오.
// 출력 예)
/*
 2.1yd = 192.0cm
10.5in =  26.7cm
*/

let yd = 91.44;
let inch = 2.54;

let yd2 = yd * 2.1;
let inch2 = inch * 10.5;
console.log(yd2, inch2);
console.log(` 2.1yd = ${yd2.toFixed(1)}cm
10.5in =  ${inch2.toFixed(1)}cm`);
