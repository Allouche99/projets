const submitBtn = document.getElementById('submit');
const inputM = document.getElementById('message-input');
const outputM = document.getElementById('message-output');
function getMessage() {
  outputM.innerText = inputM.value;
  inputM.value = '';
}
inputM.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') getMessage();
});
submitBtn.addEventListener('click', getMessage);
