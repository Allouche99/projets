document.addEventListener('DOMContentLoaded', function () {
  
    const screen = document.getElementById('calculator-screen');
  const buttons = document.querySelectorAll('#calculator button');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      handleButtonClick(button.textContent);
    });
  });

  function handleButtonClick(value) {
    if (value === 'C') {
      screen.value = '';
    } else if (value === '=') {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = 'Error';
        screen.style.color = 'red'; // Change la couleur du texte en rouge
      }
    } else if (isOperator(value) && screen.value === '') {
      // Si l'utilisateur clique sur un opérateur sans avoir saisi de nombre
      screen.value = 'Error';
      screen.style.color = 'red';
      errorMessage();
    } else {
      screen.value += value;
      screen.style.color = 'black'; // Réinitialise la couleur du texte à noir
    }
  }
  function errorMessage() {
    document.getElementById('error-message').textContent = 'Click on C';
  }

  // Fonction pour vérifier si une chaîne est un opérateur
  function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
  }
});
