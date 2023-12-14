// Nav Section
const nav = document.getElementById("nav");
const links = document.querySelectorAll(".nav-item a");

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    links.forEach((ele) => {
      e.target.classList.add("active");
    });
  }
});

function changeNavBg() {
  if (document.documentElement.scrollTop > 300) {
    nav.classList.add("changebg");
  } else {
    nav.classList.remove("changebg");
  }
}
window.addEventListener("scroll", changeNavBg);

// home Section
setTimeout(() => {
  const home = document.querySelector(".home");
  home.style.opacity = "1";
}, 500);

// about Section
const aboutContent = document.querySelector(".about .content");
const aboutImage = document.querySelector(".about-image");
function showText() {
  if (document.documentElement.scrollTop > 400) {
    aboutContent.style.transform = "translateX(0%)";
    aboutImage.style.transform = "translateX(0%)";
  } else {
    aboutContent.style.transform = "translateX(150%)";
    aboutImage.style.transform = "translateX(-150%)";
  }
}
window.addEventListener("scroll", showText);

// skills Section
const htmlProg = document.querySelector(".html-bar");
const cssProg = document.querySelector(".css-bar");
const jsProg = document.querySelector(".js-bar");
const reactProg = document.querySelector(".react-bar");
const reduxProg = document.querySelector(".redux-bar");
const bootStrapProg = document.querySelector(".boot-bar");
const muiProg = document.querySelector(".mui-bar");
const gitProg = document.querySelector(".git-bar");
function progress() {
  if (document.documentElement.scrollTop > 1200) {
    htmlProg.style.width = "85%";
    cssProg.style.width = "95%";
    jsProg.style.width = "75%";
    reactProg.style.width = "80%";
    reduxProg.style.width = "75%";
    bootStrapProg.style.width = "85%";
    muiProg.style.width = "80%";
    gitProg.style.width = "75%";
  } else {
    htmlProg.style.width = "0%";
    cssProg.style.width = "0%";
    jsProg.style.width = "0%";
    reactProg.style.width = "0%";
    reduxProg.style.width = "0%";
    bootStrapProg.style.width = "0%";
    muiProg.style.width = "0%";
    muiProg.style.width = "0%";
    gitProg.style.width = "0%";
  }
}
window.addEventListener("scroll", progress);

// projects Section

const cards = document.querySelectorAll(".card");

function projectAnimation() {
  if (document.documentElement.scrollTop > 1600) {
    for (let i = 0; i < cards.length; i++) {
      cards[0].style.opacity = "1";
      setTimeout(() => {
        cards[1].style.opacity = "1";
      }, 300);
      setTimeout(() => {
        cards[2].style.opacity = "1";
      }, 600);
      setTimeout(() => {
        cards[3].style.opacity = "1";
      }, 900);
      setTimeout(() => {
        cards[4].style.opacity = "1";
      }, 1200);
      setTimeout(() => {
        cards[5].style.opacity = "1";
      }, 1500);
      setTimeout(() => {
        cards[6].style.opacity = "1";
      }, 1800);
      setTimeout(() => {
        cards[7].style.opacity = "1";
      }, 2100);
    }
  } else {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.opacity = "0";
    }
  }
}
window.addEventListener("scroll", projectAnimation);

const form = document.getElementById("form");
const formAnimation = () => {
  if (document.documentElement.scrollTop > 2400) {
    form.style.opacity = "1";
  } else {
    form.style.opacity = "0";
  }
};
window.addEventListener("scroll", formAnimation);

const body = document.body;
const btn = document.getElementById("dark-btn");
let isDark = localStorage.getItem("isDark") === "true";
let Links = document.querySelectorAll("a");
let icons = document.querySelectorAll("i");
let paragraphs = document.querySelectorAll("p");
let headings = document.querySelectorAll(".heading");
let modeIcon = document.querySelector(".navbar .mode i");
let Cards = document.querySelectorAll(".card");
let firstH2 = document.querySelector("h2");

function switchTheme() {
  isDark = !isDark;
  localStorage.setItem("isDark", `${isDark}`);

  //checking if user has already selected a theme or not, if yes then set the theme accordingly
  if (isDark) {
    body.classList.add("dark");
    Links.forEach((ele) => {
      ele.classList.add("darkMode");
    });
    icons.forEach((ele) => {
      ele.classList.add("darkMode");
    });
    paragraphs.forEach((ele) => {
      ele.classList.add("darkMode");
    });
    headings.forEach((ele) => {
      ele.classList.add("darkMode");
    });
    Cards.forEach((ele) => {
      ele.classList.add("bg-black");
    });
    firstH2.style.color = "black";
    modeIcon.style.transform = "translateX(10px)";
  } else {
    body.classList.remove("dark");
    Links.forEach((ele) => {
      ele.classList.remove("darkMode");
    });
    icons.forEach((ele) => {
      ele.classList.remove("darkMode");
    });
    paragraphs.forEach((ele) => {
      ele.classList.remove("darkMode");
    });
    headings.forEach((ele) => {
      ele.classList.remove("darkMode");
    });
    Cards.forEach((ele) => {
      ele.classList.remove("bg-black");
    });
    firstH2.style.color = "white";
    modeIcon.style.transform = "translateX(-10px)";
  }
}

btn.onclick = switchTheme;
// handeleSendEmails

const submitbtn = document.getElementById("submitForm");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let params = {
    senderNAme: document.getElementById("senderName").value,
    senderEmail: document.getElementById("senderEmail").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("msg").value,
  };
  btn.value = "Sending...";

  let serviceId = "service_y7cow56";
  let templateId = "template_deo1w2i";

  emailjs.send(serviceId, templateId, params).then(
    () => {
      swal(
        "Email sent successfully!",
        "I will reply to you as soon as possible",
        "success"
      );
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
