// Store the theme
let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');

const enableDark = () => {
  document.body.classList.add('darktheme');
  localStorage.setItem('darkTheme', 'enabled');
 
  feather.replace();
};

const disableDark = () => {
  document.body.classList.remove('darktheme');
  localStorage.setItem('darkTheme', null);
 
  feather.replace();
};

if (darkTheme === 'enabled') {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDark();
  } else {
    disableDark();
  }
});

window.onload = enableDark();

// Change the theme with the time
/*
if (today === undefined) {
    const today = new Date();
}

if (today === undefined) {
    const hour = today.getHours();
}

if (hour >= 19 || hour < 5) {
    enableDark();
} else {
    disableDark();
}
*/
