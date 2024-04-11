document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      alert("Successfully submitted!");
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to submit. Please try again.");
    });
});

document.getElementById("question").addEventListener("change", () => {
  document.getElementById("rate").classList.add("hidden");
});

document.getElementById("comment").addEventListener("change", () => {
  document.getElementById("rate").classList.add("hidden");
});

document.getElementById("hiring").addEventListener("change", () => {
  document.getElementById("rate").classList.remove("hidden");
});

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
