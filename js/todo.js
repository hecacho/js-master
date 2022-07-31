const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

const TODO_KEY = "toDoListSave";

let toDoListArray = [];
let delToDoListArrayIndex;

function paintToDo(newToDoObj) {
  //todo리스트에 새로 추가할 newLi의 틀 생성
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtnDel = document.createElement("input");
  newBtnDel.type = "submit";
  newBtnDel.value = "x";
  newLi.id = newToDoObj.id;
  newLi.append(newSpan);
  newLi.append(newBtnDel);
  //newBtnDel에 리스트 삭제를 담당할 이벤트리스너 추가
  newBtnDel.addEventListener("click", onClickBtnDel);
  //newLi에 값 할당
  newSpan.innerText = newToDoObj.text;
  //todo리스트에 newLi를 삽입
  toDoList.append(newLi);
}

function onSubmitToDoList(event) {
  event.preventDefault();
  const newToDo = toDoFormInput.value;
  toDoFormInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoListArray.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDoListArray();
}

function onClickBtnDel(event) {
  const li = event.target.parentNode;
  delToDoListArrayIndex = li.id;
  toDoListArray = toDoListArray.filter(sexyFilter);
  saveToDoListArray();
  li.remove();
}

function sexyFilter(item) {
  return item.id !== parseInt(delToDoListArrayIndex);
}

//toDoListArray저장값을 localStorage에 저장
function saveToDoListArray() {
  console.log(toDoListArray);
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoListArray));
}

toDoForm.addEventListener("submit", onSubmitToDoList);

const toDoListSaved = localStorage.getItem(TODO_KEY);

if (toDoListSaved !== null) {
  const toDoListSavedParse = JSON.parse(toDoListSaved);
  toDoListArray = toDoListSavedParse;
  toDoListSavedParse.forEach(paintToDo);
}

//새로고침해도 데이터 저장
//x버튼을 눌러 todolist 삭제

//JSON.parse JSON.stringify JSON이란...
//JS에서의 객체
//forEach forEach로 실행시킨 함수의 item값? forEach숏컷
//.filter
