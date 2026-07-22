const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const heroImage = document.querySelector('.hero-image')
const navLeft = document.querySelector('.nav-left')


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

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const scrolledPast = !entry.isIntersecting
        navLeft.classList.toggle('nav-visible', scrolledPast)
    })
})

heroObserver.observe(heroImage)