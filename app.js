const btnres = document.querySelector("#requs");
const presp = document.querySelector("#resp");
const left = document.querySelector(".arrow");
const right = document.querySelector("#right");
const ul = document.querySelector("#ul");
const move = document.querySelector("#move");
btnres.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    var users = JSON.parse(this.responseText);
    for (let i in users) {
      let li = document.createElement("li");
      li.className = "list";
      let img = document.createElement("img");
      li.innerHTML = users[i].login;
      img.setAttribute("src", users[i].avatar_url);
      img.after(li);
      li.append(img);
      ul.append(li);
      move.append(ul);
      left.style.visibility = "visible";
      btnres.style.backgroundColor = "tomato";
      btnres.style.color = "white";
      btnres.style.left = "30%";
      btnres.innerHTML = "Online Loaded Users Github";
    }
  };
  xhr.send();
});
console.log(ul);

let conuter = 0;
let number = -1200;
left.addEventListener("click", () => {
  if (conuter < 6) {
    ul.style.transform = ` translateX(${number}px)`;
    conuter++;
    number += -800;
  } else {
    ul.style.transform = ` translateX(${0}px)`;
    conuter = 0;
    number = 0;
  }
});
