const body = document.body;

const btns = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};



const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btns.classList.contains("fa-bars")) {
    btns.classList.remove("fa-bars");
    btns.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btns.classList.remove("fa-times");
    btns.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btns.addEventListener("click", displayList);

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let values = {};
  Object.keys(event.target.elements).map((key) => {
    if (isNaN(key)) {
      values[key] = event.target.elements[key].value;
    }
  });

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      alert("Successfully submitted!");
    })
    .catch((err) => {
      alert(`Fail to proceed! Please, try again`);
    });
});

document.getElementById("question").addEventListener("change", () => {
  document.getElementById("rate").style = "display: none;";
});

document.getElementById("comment").addEventListener("change", () => {
  document.getElementById("rate").style = "display: none;";
});

document.getElementById("hiring").addEventListener("change", () => {
  document.getElementById("rate").style = "display: grid;";
});


