// 문제) 추의 무게를 저장할 변수와 중력의 비율을 저장할 변수를 선언하고,
// 다음 두 값을 변수에 저정하여 곱셈 계산식을 출력하는 프로그램을 작성하라.
// 추의 무게 = 49, 중력의 비율 = 0.2683
// 출력예)
// 49 * 0.268300 = 13.146700

let chu;
let press;
chu = 49;
press = (0.2683).toFixed(6);
let ratio = chu * press; // 할당된 값을 사용하려면, 변수 할당 이후에 식을 세팅해야 함. 변수 선언이후, 할당 이전에 식을 세우면 NaN 값이 나옴.
console.log(`${chu} * ${press} = ${ratio.toFixed(6)}`);
