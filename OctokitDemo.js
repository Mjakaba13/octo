let valve = document.getElementById("valve");
let subBtn = document.getElementById("sub");
let info = document.getElementById("data");
import { Octokit } from "https://cdn.skypack.dev/octokit";
const octokit = new Octokit();

function displayData(data) {
  let show = document.createElement("img");
  show.setAttribute("src", data.data.avatar_url);
  info.appendChild(show);
  let userName = document.createElement("p");
  info.appendChild(userName);
  userName.innerHTML = `Name: ${data.data.name} \n
  Location: ${data.data.location}`;
}

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  octokit.rest.users
    .getByUsername({
      username: valve.value,
    })
    .then((data) => {
      displayData(data);
    })
    .catch((err) => console.log(err));
});
