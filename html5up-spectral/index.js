const counter = document.querySelector(".counter-number");
async function updateCounter() {
  let response = await fetch(
    "https://7h6ctpixyonctnhb6nnburbdby0xcgsa.lambda-url.ca-central-1.on.aws/"
  );
  let data = await response.json();
  counter.innerHTML = `Views:  ${data}`;
}
updateCounter();

const counter2 = document.querySelector(".counter2-number");
async function updateCounter2() {
  let response = await fetch(
    "https://fxlssbuz6kidv374xsfouz7elm0ytxfs.lambda-url.ca-central-1.on.aws/"
  );
  let data = await response.json();
  counter2.innerHTML = `Views:  ${data}`;
}
updateCounter2();
