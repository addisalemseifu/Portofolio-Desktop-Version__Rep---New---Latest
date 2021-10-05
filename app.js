const menue = document.querySelector('.menue_bar');
const wrapper = document.querySelector('.nav_wrapper');
const menue_links= document.querySelector('.menue_bar_desktop');
const navLogo = document.querySelector('#navbar__logo');


menue.addEventListener('click', function(){
    menue.classList.toggle('a');
    menue_links.classList.toggle('active');
    wrapper.classList.toggle('.navopen');
});

const menuBarHide = () => {
    const menuBars = document.querySelector(".a");
        if (window.innerWidth <= 960 && menuBars) {
            menue.classList.toggle("a")
            menue_links.classList.remove('active');
        }
    }

    menue_links.addEventListener("click", menuBarHide);
    menue_links.addEventListener("click", menuBarHide);





    const modalTriggerButton = document.querySelector('.see-project');
    const modal = document.querySelector('#popup');
    const madalCloseButton = document.querySelector('.closeBtn');
    
    modalTriggerButton.addEventListener('click', event => {
        modal.style.display = 'flex';
        // document.body.style.overflow = 'hidden';
    });
    
    madalCloseButton.addEventListener('click', event => {
        modal.style.display = 'none';
        // document.body.style.overflow = 'initial';
    });
    










