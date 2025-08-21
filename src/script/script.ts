// Burger Menu 
const burgerMenu = document.querySelector('#burger-menu') as HTMLElement | null;

// Side Menu 
const sideMenu   = document.querySelector('#side-nav') as HTMLElement | null;

// Close Icon 
const closeIcon = document.querySelector('#close') as HTMLElement | null


if (burgerMenu && sideMenu) {
  burgerMenu.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    sideMenu.classList.add('show')
    document.body.classList.add("lock-scroll")
  });
}

if (burgerMenu && sideMenu){
  closeIcon?.addEventListener('click', () => {
    sideMenu.classList.remove("show");    
    document.body.classList.remove("lock-scroll");
  })
}
