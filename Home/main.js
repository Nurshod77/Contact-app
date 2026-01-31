const enterBtn = document.getElementById('enterBtn');
const duringOrBack = document.getElementById('duringOrBack');

function toggleTheme() {
    const body = document.body;
    const img = document.getElementById('img')
    const header = document.getElementById('header')
    if (body.getAttribute('data-theme') === 'dark') {
        img.innerHTML = `
        <button class="light-mode">
            <img src="./Icons.svg" alt="">
            Tun rejimi
        </button>
        
      `
        body.setAttribute('data-theme', 'light');
    } else {
        img.innerHTML = `
            <button class="light-mode">
                <img src="./Frame (1).svg" alt="">
                Kun rejimi
            </button>
        `
        body.setAttribute('data-theme', 'dark');
    }
}

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");

if (firstName && lastName) {
    document.getElementById("welcome").textContent = `
        ${firstName} ${lastName}
    `
} else {
    document.getElementById("welcome").textContent = `
        "Ma'lumot topilmadi
    `
}

var list = document.getElementById("list");
var search = document.getElementById("search");
var users = [];

fetch("https://randomuser.me/api/?results=8")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    users = data.results;
    showUsers(users);
  });

function showUsers(data) {
  list.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var u = data[i];

    list.innerHTML += `
      <div class="contact">
        <img src="${u.picture.medium}">
        <div class="text">
          <div class="name">${u.name.first} ${u.name.last}</div>
          <div class="phone">${u.phone}</div>
        </div>
        <div class="star" onclick="this.innerHTML = this.innerHTML=='★'?'☆':'★'">☆</div>
        <img style="width: 15px; height: 20px; cursor: pointer;" src="./dotted.png">
      </div>
    `;
  }
}


var contacts = [];

var nameInp = document.getElementById("name");
var lastInp = document.getElementById("last");
var phoneInp = document.getElementById("phone");
var list = document.getElementById("list");

function addContact() {
  if (nameInp.value == "" || phoneInp.value == "") {
    alert("Ma'lumot to'ldiring");
    return;
  }

  var newContact = {
    name: nameInp.value,
    last: lastInp.value,
    phone: phoneInp.value
  };

  contacts.unshift(newContact); 

  showContacts();

  nameInp.value = "";
  lastInp.value = "";
  phoneInp.value = "";
}

function showContacts() {
  list.innerHTML = "";

  for (var i = 0; i < contacts.length; i++) {
    list.innerHTML += `
      <div class="contact">
        <img src="https://ui-avatars.com/api/?name=${contacts[i].name}">
        <div>
          <b>${contacts[i].name} ${contacts[i].last}</b><br>
          <small>${contacts[i].phone}</small>
        </div>
      </div>
    `;
  }
}