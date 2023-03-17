const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuNav = document.getElementById('mobile-menu-nav');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuDiv = document.getElementById('mobile-menu-div');


mobileMenu.addEventListener('click', () => {
    mobileMenuNav.classList.replace('hidden', 'flex');
})

mobileMenuClose.addEventListener('click', () => {
    mobileMenuNav.classList.replace('flex', 'hidden');
})

document.addEventListener('click', (event) => {
    if (!mobileMenuDiv.contains(event.target)) {
        mobileMenuNav.classList.replace('flex', 'hidden');
    }
})

/*      OUR SERVICES        */

const servicesProjInitDivs = Array.from(document.getElementsByClassName('project-initiation'))
const servicesProjInitBtns = Array.from(document.getElementsByClassName('project-initiation-btns'))



servicesProjInitBtns.forEach(btn => btn.addEventListener('click', (e) => {
    btnIndex = servicesProjInitBtns.findIndex(element => element == e.target)
    btnFocusIndex = servicesProjInitBtns.findIndex(element => element.classList.contains('project-initiation-focused'))
    divIndex = servicesProjInitDivs.findIndex(element => !element.classList.contains('hidden'))
    servicesProjInitBtns[btnFocusIndex].classList.replace('project-initiation-focused', 'project-initiation-unfocused')
    e.target.classList.replace('project-initiation-unfocused', 'project-initiation-focused')
    servicesProjInitDivs[divIndex].classList.replace('block', 'hidden');
    servicesProjInitDivs[btnIndex].classList.replace('hidden', 'block');
}))
