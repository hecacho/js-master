const clock = document.querySelector("#clock");

function intervalClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock_hm.innerText = `${hour}:${minute}`;
  clock_s.innerText = `.${second}`;
}

intervalClock();
setInterval(intervalClock, 1000);
