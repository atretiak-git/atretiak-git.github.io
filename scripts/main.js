const myHeading = document.querySelector('#t11');
myHeading.textContent = 'Hello world!';

var x = document.querySelectorAll("h1");
for (var i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "red";
}

for (var i = 0; i < x.length; i++) {
  x[i].style.color = "white";
}