let x = 0;
const element = document.getElementsById("img1");

function animate() {
  x += -150
  element.style.right = x + 'px'
}

setInterval(animate, 50);