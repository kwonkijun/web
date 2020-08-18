const addVideoBtn = document.querySelector("#suit-icon-plus");
const mainContainer = document.querySelector(".main-container");
const body = document.querySelector("body");

// https://www.youtube.com/watch?v=priEpkZoW5I
// https://www.youtube.com/watch?v=PyKEsoHRTfo

function onClickConfirmBtn() {
  const inputUrl = document.querySelector("#inputUrl").value.split("=")[1];
  const inputName = document.querySelector("#inputName").value;
  const inputWatchNum = document.querySelector("#inputWatchNum").value;
  const inputCreateDate = document.querySelector("#inputCreateDate").value;

  const template = `
    <iframe width="280" height="170"
    src="https://www.youtube.com/embed/${inputUrl}" allowfullscreen>
    </iframe>
    <div class="video-subtitle">
        <h3>
            ${inputName}
        </h3>
        <span>조회수 ${inputWatchNum}회 · ${inputCreateDate}전</span>
    </div>
  `;
  const markUp = document.createElement("div");
  markUp.classList.add("video-card");
  markUp.innerHTML = template;
  mainContainer.querySelector(".suit-video-container").appendChild(markUp);
  const newCard = mainContainer.querySelector(".suit-video-container").lastChild;

  window.scroll({
    behavior: "smooth",
    left: 0,
    top: newCard.offsetTop - newCard.offsetHeight
  });

  onClickCloseBtn();
}

function onClickCloseBtn() {
  mainContainer.removeChild(mainContainer.firstChild);
  body.style.opacity = 1;
}

function openAddVideoPopUp() {
  const template = `
        <div class="add-video-container">
            <h2>비디오 추가하기</h2>
            <input type="text" placeholder="URL(주소)" id="inputUrl">
            <input type="text" placeholder="영상제목" id="inputName">
            <input type="text" placeholder="조회수" id="inputWatchNum">
            <input type="text" placeholder="생성일자" id="inputCreateDate">
            <button class="confirm-btn" onClick="onClickConfirmBtn()">추가하기</button>
            <button class="close-btn" onClick="onClickCloseBtn()">닫기</button>            
        </div>
    `;
  const markUp = document.createElement("div");
  markUp.innerHTML = template;
  mainContainer.insertBefore(markUp, mainContainer.childNodes[0]);
  body.style.opacity = 0.5;
}

function addInitEventLisnter() {
  addVideoBtn.addEventListener("click", openAddVideoPopUp);
}

function init() {
  addInitEventLisnter();
}

init();
