const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const streetNumber = document.getElementById('streetNumber');
const streetLabel = document.getElementById('streetLabel');
const streetName = document.getElementById('streetName');
const city = document.getElementById('city');
const postalCode = document.getElementById('postalCode');
const submitBtn = document.getElementById('submitBtn');

function submitData() {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    streetNumber: streetNumber.value,
    streetLabel: streetLabel.value,
    streetName: streetName.value,
    city: city.value,
    postalCode: postalCode.value,
  };

  validationAllData(formData);
  setDataToLocalStorage(formData);
}

function validationAllData(formData) {
  if (!areAllFieldsFilled(formData)) {
    return alert('Veuillez remplir tous les champs.');
  }
  if (!vPhoneNumber(formData.phone)) {
    return alert(
      'Veuillez saisir un numéro de téléphone valide avec exactement 10 chiffres, sans espaces.'
    );
  }
  if (!vEmail(formData.email)) {
    return alert('Veuillez saisir une adresse e-mail valide.');
  }
  alert('Formulaire soumis avec succès !');
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}
function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

function areAllFieldsFilled(formData) {
  for (let key in formData) {
    if (formData[key] === '' || formData[key] === undefined) {
      return false;
    }
    setSuccess(formData[key]);
  }
  return true;
}

function vPhoneNumber(phone) {
  let phoneNumber = phone.replace(/\s/g, '');
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

function vEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function setDataToLocalStorage(formData) {
  let existingData = JSON.parse(localStorage.getItem('formData')) || [];

  existingData.push(formData);

  localStorage.setItem('formData', JSON.stringify(existingData));
  document.getElementById('myForm').reset();
}
// localStorage.clear()
submitBtn.addEventListener('click', submitData);
