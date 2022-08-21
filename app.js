const timeCurrent = document.querySelector(".clock__timer__current");
const dayCurrent = document.querySelector("#day__current");
const stopWatch = document.querySelector("#stopwatch");

function getTime() {
  const time = new Date();
  const timeNow = ` ${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${
    time.getMinutes() < 10 ? "0" : ""
  }${time.getMinutes()}`;
  const currentHours = time.getHours();

  timeCurrent.innerHTML = timeNow;
  if (currentHours > 12) {
    dayCurrent.innerHTML = "PM";
  } else {
    dayCurrent.innerHTML = "AM";
  }
}

function handleGetTime() {
  setInterval(() => {
    getTime();
  }, 1000);
}

handleGetTime();
