// 3. 연산과 연산자
// 3.1 산술연산 : + - * / % 
// 3.2 비교연산 : > < >= <= == !=
// 3.3 논리연산 : AND(&&) OR(||) NOT(!)

// 4. 조건문
/*
if(조건){
    명령블록    
}else {
    명령블록
}

if(조건1){
    명령블록
}else if(조건2){
    명령블록
}else if(조건3){
    명령블록
}

if(a > b && b > c){
    명령블록
}
*/

// 5. 반복문
// for(초기화;조건문; 증감식){

// }

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// 사용자로 부터 입력받기 
let num =3;

for(i=1;i<10;i++){
    result= num + "x" + i + "=" + num*i;
    
    console.log(result);

}
