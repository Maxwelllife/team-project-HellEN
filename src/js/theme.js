document.querySelector('.switcher').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme');
    }
    else {
      localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
  });
  function addDarkClassToHTML() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('body').classList.add('dark');
        // document.querySelector('.switcher').textContent = 'dark_mode';
      }
      else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('body').classList.remove('dark');
        // document.querySelector('.switcher').textContent = 'wb_sunny';
      }
    } catch (err) { }
  }
  addDarkClassToHTML();