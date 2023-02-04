let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".team-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("contact_form")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  let ebody = `
  <b>Name: </b>${name.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Phone Number: </b>${phone.value}
  <br>
  <b>Message: </b>${message.value}
  `;

  Email.send({
    SecureToken: "366f20d8-8621-4aa7-8fb7-97c21e63e956",
    To: "stomatolog.behzod@gmail.com ",
    From: "stomatolog.behzod@gmail.com",
    Subject: "Message from " + email.value,
    Body: ebody,
  }).then((message) => alert("вы забронировали встречу"));
});
