const count = document.getElementById('count');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
let counter = 0;
increase.addEventListener('click', () => {
  changeCount(-1);
});
decrease.addEventListener('click', () => {
  changeCount(1);
});
changeCount = (number) => {
  counter += number;
  count.textContent = counter;
};
