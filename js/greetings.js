const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("username");

const CLASSNAME_HIDDEN = "hidden";

//함수 모음
function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add(CLASSNAME_HIDDEN);
  showGreeting();
}
function showGreeting() {
  const username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  showGreeting();
}
