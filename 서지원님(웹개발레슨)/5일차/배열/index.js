// 6. 배열 (Array, List) - 데이터가 여러개인 녀석을 한번에 묶을 때

// 배열 만들기 (빈 상태) - 운전석만 있는 기차
let arr = [];

// 배열 요소 (element) 추가하기 - 승객 태우기
arr.push("이재용"); // 0
arr.push("오바마"); // 1
arr.push("트럼프"); // 2
arr.push("시진핑"); // 3

// 배열의 인덱스(index) - 몇 번째 칸에 있냐? (중요!) - 0부터 시작
// console.log(arr[3]);

// 배열의 요소 변경하기 - 승객 바꾸기 
arr[2] = "바이든"

// 배열 길이(length) - 기차가 총 몇칸 있냐?
console.log(arr.length)

// 배열 전체요소 순차적으로 탐색하기 - 승객 전부 확인하기 
for(let i = 0; i < arr.length; i++){
    if(arr[i] == "시진핑"){
        arr[i] += "관심없음";
    }
}
console.log(arr);