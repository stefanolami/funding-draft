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


function handleMobileServicesBtns(btnsArr, divsArr, str) {
    btnsArr.forEach(btn => btn.addEventListener('click', (e) => {
        console.log('click')
        btnIndex = btnsArr.findIndex(element => element == e.target)
        btnFocusIndex = btnsArr.findIndex(element => element.classList.contains(`services-project-${str}-focused`))
        divIndex = divsArr.findIndex(element => !element.classList.contains('hidden'))
        btnsArr[btnFocusIndex].classList.replace(`services-project-${str}-focused`, `services-project-${str}-unfocused`)
        e.target.classList.replace(`services-project-${str}-unfocused`, `services-project-${str}-focused`)
        divsArr[divIndex].classList.replace('block', 'hidden');
        divsArr[btnIndex].classList.replace('hidden', 'block');
    }))
}

handleMobileServicesBtns(mobileServicesProjInitBtns, mobileServicesProjInitDivs, 'initiation')
handleMobileServicesBtns(mobileServicesProjPlanBtns, mobileServicesProjPlanDivs, 'planning')
handleMobileServicesBtns(mobileServicesProjExecBtns, mobileServicesProjExecDivs, 'execution')
handleMobileServicesBtns(mobileServicesProjClosBtns, mobileServicesProjClosDivs, 'closure')



/*     TABLET / DESKTOP OUR SERVICES        */


const tabletServicesDivs  = Array.from(document.getElementsByClassName('tablet-services-div'))
const tabletServicesBtns = Array.from(document.getElementsByClassName('tablet-services-btns'))
const tabletServicesLogo = document.getElementById('tablet-services-logo')


tabletServicesBtns.forEach(btn => btn.addEventListener('mouseover', (e) => {
    if (tabletServicesLogo.classList.contains('block')) {
        tabletServicesLogo.classList.replace('block', 'hidden')
    }
    btnFocusIndex = tabletServicesBtns.findIndex(element => element.classList.contains('focused'))
    if (btnFocusIndex !== -1) {
        tabletServicesBtns[btnFocusIndex].classList.replace('focused', 'unfocused')
    }
    btnIndex = tabletServicesBtns.findIndex(element => element == e.target)
    tabletServicesBtns[btnIndex].classList.replace('unfocused', 'focused')
    divShownIndex = tabletServicesDivs.findIndex(element => element.classList.contains('block'))
    if (divShownIndex !== -1) {
        tabletServicesDivs[divShownIndex].classList.replace('block', 'hidden')
    }
    tabletServicesDivs[btnIndex].classList.replace('hidden', 'block')
}))


