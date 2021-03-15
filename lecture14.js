var a = prompt("알고 싶은 년도를 입력하세요");
console.log(isleapYear(a));

function isleapYear(year){
  if (year % 4 == 0) {
    return true;
  } else {
  //else 구문을 추가하세요
    return false;
  } 

}
