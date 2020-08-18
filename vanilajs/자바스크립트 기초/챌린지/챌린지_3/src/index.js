

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const remainDate = document.querySelector("h3");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  let milliseonds = xmasDay - new Date();
  
  const day = parseInt(milliseonds / (1000 * 60 * 60 * 24));
  milliseonds = milliseonds - day * (1000 * 60 * 60 * 24);
  
  const hour = parseInt(milliseonds / (1000 * 60 * 60));
  milliseonds = milliseonds - hour * (1000 * 60 * 60);
  
  const minute = parseInt(milliseonds / (1000 * 60));
  milliseonds = milliseonds - minute * (1000 * 60);

  const second = parseInt(milliseonds / 1000);
  remainDate.innerHTML = `${day}d ${hour < 10 ? '0' + hour : hour}h ${minute < 10 ? '0' + minute : minute}m ${second < 10 ? '0' + second : second}s`; 
}

function init() {
  setInterval(getTime, 1000);
}
init();
