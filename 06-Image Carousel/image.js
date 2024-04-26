const prev = document.getElementById('prev');
const next = document.getElementById('next');
const image = document.getElementsByClassName('image');
const dots = document.getElementsByClassName('dot');
let index = 0;
slidImage(index);

function slidImage(i) {
  index += i;
  for (i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace(' active', '');
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].classList.remove('active'); 
  }

  if (index > image.length - 1) index = 0;
  if (index < 0) index = image.length - 1;

  image[index].style.display = 'block';
  dots[index].className += ' active';
}
prev.addEventListener('click', function () {
  slidImage(-1);
});

next.addEventListener('click', function () {
  slidImage(1);
});
