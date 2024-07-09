var mode = document.getElementById("mode");

mode.addEventListener("change", (e) => {
  console.log(e, "this should be the checkbox");
  if (e.target.checked === true) {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--secondary-color", "white");
  }
  if (e.target.checked === false) {
    document.documentElement.style.setProperty("--main-color", "#071e2e");
    document.documentElement.style.setProperty("--secondary-color", "white");
  }
});
