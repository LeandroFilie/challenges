const date = new Date();
const currentTime = date.getHours();

const body = document.querySelector('body');
const image = document.getElementById('image');
const message = document.getElementById('currentTimeMessage');
message.innerText = currentTime;

console.log(body);

if(currentTime < 12){
  image.src = './images/morning.jpg';
  image.setAttribute('alt','Foto de Manhã');
  body.style.backgroundColor = '#E2CD9F';
} else if (currentTime >= 12 && currentTime < 18) {
  image.src = './images/afternoon.jpg';
  image.setAttribute('alt','Foto de Tarde');
  body.style.backgroundColor = '#B9846F';
} else {
  image.src = './images/night.jpg';
  image.setAttribute('alt','Foto de Noite');
  body.style.backgroundColor = '#515154';
}