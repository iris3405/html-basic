do{
var a = Math.ceil(Math.random()*10);
var b = Math.ceil(Math.random()*10);
var solution = a * b;
var ans;
var ans = parseInt(prompt(a + "*" + b + "=?"));
}while(ans != solution);
console.log("맞았습니다.");
