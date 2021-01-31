// querySelector : CSS 선택자로 HTML 요소를 선택 (한개)
// qeurySelectorAll : CSS 선택자로 HTML 요소를 선택 (여러개)
const body = document.querySelector("body");

const div = document.querySelector("#hi");
div.innerText = "반갑습니다.";
div.style.color = "red";

const button = document.querySelector("#btn");

button.addEventListener("click", function(){
    if(div.innerText == "반갑습니다."){
        div.innerText = "클릭되었어요";
    }else{
        div.innerText = "반갑습니다.";
    }
})

const button2 = document.querySelector("#btn2");

button2.addEventListener("click", function(){
    const h1 = document.createElement("h1");
    h1.innerText = "수고하셨습니다. 저녁 맛있게 드세요. 대판야끼";
    body.appendChild(h1);
})
