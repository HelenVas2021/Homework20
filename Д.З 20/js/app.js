const people = document.getElementById("peopleBtn");
const planet = document.getElementById("planetBtn");
const transport = document.getElementById("transportBtn");
const namePeople = document.getElementById("people");
const namePlanet = document.getElementById("planets");
const nameTransport = document.getElementById("transports");
const btn = document.getElementById("more");
const btnPlanet = document.getElementById("morePlanet");
const btnTransport = document.getElementById("moreTransp");
const allInfo = document.getElementById("all");

let nextLinkPeople = "https://swapi.dev/api/people/";
let moreInfoPeople = "https://swapi.dev/api/people/?page=2";
let linkPlanet = "https://swapi.dev/api/planets/";
let moreInfoPlanet = "https://swapi.dev/api/planets/?page=2";
let linkTransport = "https://swapi.dev/api/vehicles/";
let moreInfoTransport = "https://swapi.dev/api/vehicles/?page=2";

//PEOPLE
people.addEventListener("click", () => {
  if ((namePeople.textContent = " ")) {
    fetch(nextLinkPeople)
      .then((res) => res.json())
      .then((res) => getUserName(res));
  }
});

function getUserName(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    namePeople.appendChild(item);
  }
  btn.className = "view";
}

btn.addEventListener("click", () => {
  if (moreInfoPeople === null) {
    return;
  }
  fetch(moreInfoPeople)
    .then((res) => res.json())
    .then((res) => getMoreInfoPeople(res));
});

function getMoreInfoPeople(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    namePeople.appendChild(item);
  }
  moreInfoPeople = data.next;
}

//PLANET
planet.addEventListener("click", () => {
  if ((namePlanet.textContent = " ")) {
    fetch(linkPlanet)
      .then((res) => res.json())
      .then((res) => getPlanetName(res));
  }
});

function getPlanetName(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    namePlanet.appendChild(item);
  }
  btnPlanet.className = "view";
}

btnPlanet.addEventListener("click", () => {
  if (moreInfoPlanet === null) {
    return;
  }
  fetch(moreInfoPlanet)
    .then((res) => res.json())
    .then((res) => getMoreInfoPlanet(res));
});

function getMoreInfoPlanet(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    namePlanet.appendChild(item);
  }
  moreInfoPlanet = data.next;
}

//TRANSPORT
transport.addEventListener("click", () => {
  if ((nameTransport.textContent = " ")) {
    fetch(linkTransport)
      .then((res) => res.json())
      .then((res) => getTransportName(res));
  }
});

function getTransportName(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    nameTransport.appendChild(item);
  }
  btnTransport.className = "view";
}

btnTransport.addEventListener("click", () => {
  if (moreInfoTransport === null) {
    return;
  }
  fetch(moreInfoTransport)
    .then((res) => res.json())
    .then((res) => getMoreInfo(res));
});

function getMoreInfo(data) {
  for (let i = 0; i < data.results.length; i++) {
    const item = document.createElement("li");
    item.textContent = data.results[i].name;
    item.setAttribute("data-link", data.results[i].url);
    item.addEventListener("click", showMoreInfo);
    nameTransport.appendChild(item);
  }
  moreInfoTransport = data.next;
}

function showMoreInfo(event) {
  fetch(event.target.getAttribute("data-link"))
    .then((res) => res.json())
    .then((res) => {
      allInfo.innerHTML = " ";
      for (let key in res) {
        allInfo.innerHTML += `${key} : ${res[key]};` + "<br>";
      }
    });
}
