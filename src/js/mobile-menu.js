(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    Menu: document.querySelector('[data-menu]'),
    menuList: document.querySelector('.menu__list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.Menu.classList.toggle('is-open');
  }
  function removeMenu() {
    document.body.classList.remove('menu-open');
    refs.Menu.classList.add('is-open');
  }
})();
