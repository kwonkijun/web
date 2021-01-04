// 7. 함수 (function) - 모듈화 시키는거 (폴더 정리)

// 함수 정의하기 (폴더 만들기)
function myFunc(){
    console.log("함수 어렵지 않아요..");
    console.log("함수 어렵지 않아요..");
    console.log("함수 어렵지 않아요..");
}

// 함수 사용하기 
// myFunc();

// 함수 정의하기 2 - 매개변수(parameter) 이용하기
function myFunc2(number, string){
    console.log("함수에서 받은 데이터 : ", number, string);
}

// myFunc2(3, "워씨 잠온다");

// 함수 리턴하기 
function myFunc3(){
    console.log("리턴값이 있는 함수입니다.");
    return true;
}

// const result = myFunc3();

// alert(result);

// 함수 예시 - 합계 구하는 함수

function sum(x, y){
    return x + y;
}

console.log(sum(1, 2));

// 과제
// function calculator(x, y, op){
    
//     return result;
// }

// console.log(calculator(1, 2, "+")); // 3
// console.log(calculator(1, 2, "-")); // -1
// console.log(calculator(1, 2, "*")); // 2
// console.log(calculator(1, 2, "/")); // 0.5

function greeting(){
    document.write("<h1 class='greeting' style='color : red;'> 새해복 많이 받으세요!! </h1>");
}

greeting();

const h1 = document.querySelector(".greeting");

h1.addEventListener("click", function(){
    alert("다음 시간은 언제쯤?");
})