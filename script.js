const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle('active')
    navToggle.setAttribute('aria-expanded', isOpen)
})

const desktopQuery = window.matchMedia('(min-width: 48rem)')

desktopQuery.addEventListener("change", (e) => {
    if(e.matches) {
        navMenu.classList.remove('active')
        navToggle.setAttribute('aria-expanded', false)
    }
})