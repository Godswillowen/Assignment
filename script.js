window.onload = function () {
  console.log("E-Lib website loaded");
};

function changeText() {
  document.getElementById("welcome").innerText = "Welcome to E-Lib 👋";
}

function showDate() {
  document.getElementById("date").innerText = "Today is: " + Date();
}
