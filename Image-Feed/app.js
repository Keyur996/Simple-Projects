const container = document.querySelector('.container');
const row = 5;
const imageUrl = "https://source.unsplash.com/random/";
// console.log(container); 

for (let i = 0; i < row * 3; i++ ){
   let img = document.createElement("img");
   img.src = `${imageUrl}${getRandomSize()}`;
   // console.log(img.src);
   container.appendChild(img);
}
// console.log(getRandomSize());
function getRandomSize() {
   return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
   return Math.floor(Math.random() * 10) + 300;
}