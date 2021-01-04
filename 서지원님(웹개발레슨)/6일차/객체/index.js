// 객체 (Object) - 속성과 메서드를 가지고 있는 데이터

// 고양이 객체

// 속성 (property)
// - 1. 품종 : '코리안 숏헤어'
// - 2. 나이 : 3살
// - 3. 성별 : 암컷

// 메서드 (method)
// - 1. 미야옹울기()
// - 2. 츄르먹기()
// - 3. 대변보기()


// 자바스크립트 객체 생성방법_1
const person = {
    username : "아이유",
    age : 27,
    job : "가수",
    interests : ["singing", "dancing"],
    hello : function(){
        console.log("Hi! i'am " + this.username + "my age is " + this.age);
    }
}

// 자바스크립트 객체 생성방법_2
const person_a = {};
person_a.username = "제니";
person_a.age = 24;
person_a.job = "가수";
person_a.interests = ['eating', 'sports'];
person_a.hello = function(){
    console.log("Hi! i'am " + this.username + "my age is " + this.age);
}

// 자바스크립트 객체 생성방법_3 - 공장에서 찍어내기

// 생성자 (constructor) : 공장
function Person(username, age, job, interests){
    this.username = username;
    this.age = age;
    this.job = job;
    this.interests = interests;
    this.hello = function(){
        console.log("Hi! i'am " + this.username + "my age is " + this.age);
    }
}

// 인스턴스 (instance) 생성 : 공장 돌리기
const messi = new Person("메시", 35, "축구선수", ['발재간','헛드리블']);
messi.hello();

