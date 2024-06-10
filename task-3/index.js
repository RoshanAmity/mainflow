const body = document.body;
const header = document.querySelector('header');
const checkbox = document.getElementById('check');
const root = document.documentElement;

function lightMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  header.classList.remove('dark-mode');
  header.classList.add('light-mode');

  document.querySelector('#moon').style.display = 'none';
  document.querySelector('#sun').style.display = 'block';
  root.style.setProperty('--color', '#4ff8ed');

  checkbox.checked = false;

  localStorage.setItem('mode', 'light');
}

function darkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  header.classList.remove('light-mode');
  header.classList.add('dark-mode');

  document.querySelector('#moon').style.display = 'block';
  document.querySelector('#sun').style.display = 'none';
  root.style.setProperty('--color', '#0B60B0');

  checkbox.checked = true;

  localStorage.setItem('mode', 'dark');
}

checkbox.addEventListener('click', function () {
  if (this.checked) {
    darkMode();
  } else {
    lightMode();
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('Form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const numberInput = document.getElementById('number');
  const errorMessage = document.getElementById('error-message');

  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    darkMode();
  } else {
    lightMode();
  }


  form.addEventListener('submit', function (event) {
    errorMessage.textContent = '';
    nameInput.style.backgroundColor = '';
    emailInput.style.backgroundColor = '';
    passwordInput.style.backgroundColor = '';
    numberInput.style.backgroundColor = '';

    let valid = true;

    if (nameInput.value.trim() === '') {
      errorMessage.textContent = 'Name is required.';
      errorMessage.style.color = 'red';
      nameInput.style.backgroundColor = 'red';
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(emailInput.value)) {
      errorMessage.textContent += ' Please enter a valid email address with @gmail.com domain.';
      errorMessage.style.color = 'red';
      emailInput.style.backgroundColor = 'red';
      valid = false;
    }

    if (passwordInput.value.length < 6) {
      errorMessage.textContent += ' Password must be at least 6 characters long.';
      errorMessage.style.color = 'red';
      passwordInput.style.backgroundColor = 'red';
      valid = false;
    }

    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(numberInput.value)) {
      errorMessage.textContent += ' Number must be exactly 10 digits, OR Invalid Input.';
      errorMessage.style.color = 'red';
      numberInput.style.backgroundColor = 'red';
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    } else {
      errorMessage.textContent = 'All Correct Input';
      errorMessage.style.color = '#4ff8ed';
      event.preventDefault();
      alert("Registration Successfully");
    }
  });
});
