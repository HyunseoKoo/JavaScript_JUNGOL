// 문제) 년도를 입력받아 윤년(leap year)인지 평년(common year)인지 판단하는 프로그램을 작성하시오.
// 힌트) 400으로 나누어떨어지면 윤년이다. 또는 4로 나누어떨어지고 100으로 나누어떨어지지 않으면 윤년이다. 나머지는 모두 평년이다.
// 입력예) 2008
// 출력에) leap year

function year(a) {
  if (a % 4 == 0) {
    console.log('leap year');
  } else console.log('common year');
}

year(2008);
year(2009);
