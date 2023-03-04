const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuNav = document.getElementById('mobile-menu-nav');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenuDiv = document.getElementById('mobile-menu-div');

if (window.screen.width < 768) {
    mobileMenu.addEventListener('click', () => {
        mobileMenuNav.classList.replace('hidden', 'flex');
        console.log('opening');
    })
    
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuNav.classList.replace('flex', 'hidden');
        console.log('closing');
    })
    
    document.addEventListener('click', (event) => {
        if (!mobileMenuDiv.contains(event.target)) {
            mobileMenuNav.classList.replace('flex', 'hidden');
            console.log('closing');
            console.log('containbs');
        }
    })
    console.log('listening event')
}

