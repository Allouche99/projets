const btn = document.getElementById('submit');
let color = 0;

function changColors() {
  let colors = [
    'black',
    'silver',
    'maroon',
    'red',
    'purple',
    'green',
    'blue',
    'gold',
    'yellow',
  ];
  if (color > colors.length - 1) color = 0;
  document.body.style.backgroundColor = colors[color];
  color++;
}
btn.addEventListener('click', changColors);
