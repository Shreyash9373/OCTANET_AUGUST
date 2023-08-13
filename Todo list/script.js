const editbtn = document.getElementById("editbtn");
const removebtn = document.getElementById("removebtn");
const tasks = document.getElementsByClassName("tasks");
const ol = document.getElementById("oltag");
const textdata = document.getElementById("text");
let check = document.getElementsByClassName("check");
console.log("hello");
ol.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ol = li.parentNode;
    if (button.textContent === "remove") {
      ol.removeChild(li);
    } else if (button.textContent === "edit") {
      var span = li.firstElementChild;
      // console.log(span.textContent);
      const input = document.createElement("input");
      input.type = "text";
      // console.log(tasks.textContent);
      // console.log(input);
      //  tasks.textContent=input.value;
      //  input.value=tasks.textContent;
      li.insertBefore(input, span);
      // li.insertAdjacentHTML("beforeBegin", input);
      input.focus();
      input.select();
      li.removeChild(span);
      button.textContent = "save";
    } else if (button.textContent === "save") {
      const input = li.firstElementChild;
      localStorage.setItem("data", input.value);
      var span = document.createElement("span");
      const data = localStorage.getItem("data");
      span.textContent = data;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "edit";
    }
  }
});
