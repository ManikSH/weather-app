let form = document.querySelector("form");
let locationInput = document.querySelector("input");
let result = document.querySelector('.result')


form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/weather?location=" + locationInput.value).then(
    (res) => {
      res.json().then((data) => {
          result.textContent = data.temperature;
      });
    }
  );
});
