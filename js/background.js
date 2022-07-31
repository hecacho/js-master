const backgroundImgs = ["img/1.png", "img/2.png", "img/3.png", "img/4.png"];

const backgroundImg = document.querySelector("#background_img");

const chooseBackgroundImg =
  backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)];

const bgImg = document.createElement("img");
bgImg.src = chooseBackgroundImg;
bgImg.id = "background_img";
document.body.appendChild(bgImg);

//const myName = document.createElement("요소"); -> JS에서 HTML의 요소를 생성
//document.body.appendChild(myName); -> HTML의 body부분에 요소 삽입
