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

/*     MOBILE OUR SERVICES        */

const mobileServicesProjInitDivs = Array.from(document.getElementsByClassName('mobile-project-initiation'))
const mobileServicesProjInitBtns = Array.from(document.getElementsByClassName('mobile-project-initiation-btns'))
const mobileServicesProjPlanDivs = Array.from(document.getElementsByClassName('mobile-project-planning'))
const mobileServicesProjPlanBtns = Array.from(document.getElementsByClassName('mobile-project-planning-btns'))
const mobileServicesProjExecDivs = Array.from(document.getElementsByClassName('mobile-project-execution'))
const mobileServicesProjExecBtns = Array.from(document.getElementsByClassName('mobile-project-execution-btns'))
const mobileServicesProjClosDivs = Array.from(document.getElementsByClassName('mobile-project-closure'))
const mobileServicesProjClosBtns = Array.from(document.getElementsByClassName('mobile-project-closure-btns'))


function handleMobileServicesBtns(arr1, arr2, str) {
    arr1.forEach(btn => btn.addEventListener('click', (e) => {
        btnIndex = arr1.findIndex(element => element == e.target)
        btnFocusIndex = arr1.findIndex(element => element.classList.contains(`mobile-project-${str}-focused`))
        divIndex = arr2.findIndex(element => !element.classList.contains('hidden'))
        arr1[btnFocusIndex].classList.replace(`mobile-project-${str}-focused`, `mobile-project-${str}-unfocused`)
        e.target.classList.replace(`mobile-project-${str}-unfocused`, `mobile-project-${str}-focused`)
        arr2[divIndex].classList.replace('block', 'hidden');
        arr2[btnIndex].classList.replace('hidden', 'block');
    }))
}

handleMobileServicesBtns(mobileServicesProjInitBtns, mobileServicesProjInitDivs, 'initiation')
handleMobileServicesBtns(mobileServicesProjPlanBtns, mobileServicesProjPlanDivs, 'planning')
handleMobileServicesBtns(mobileServicesProjExecBtns, mobileServicesProjExecDivs, 'execution')
handleMobileServicesBtns(mobileServicesProjClosBtns, mobileServicesProjClosDivs, 'closure')
