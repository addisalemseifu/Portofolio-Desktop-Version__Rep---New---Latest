const menue = document.querySelector('.menue_bar');
const wrapper = document.querySelector('.nav_wrapper');
const menue_links= document.querySelector('.menue_bar_desktop');
const navLogo = document.querySelector('#navbar__logo');

const data = [{"name":"test","description":"A daily selection of privately personalized reads; no accounts or sign-ups required.","image":"pic1.png","srclink":"test","livelink":"livelinktest"},{"name":"test2","description":"test test test2","image":"pic2.png","srclink":"test2","livelink":"livelinktest2"},{"name":"test3","description":"test test test3","image":"pic3.png","srclink":"test3","livelink":"livelinktest3"}];
for(let x = 0; x < data.length;x++){
    let output = document.querySelector('#portfolio');
    output.innerHTML += "<div class='covers'><img class='img__class' src='/img/" + data[x].image +"'><div class='right__box'><h1 class='popup_tekst'>" + data[x].name + "</h1><p class='signup-disc'>" + data[x].description +"</p><button onclick='openproject(" + x + ")' class='see-project'>see project</button></div></div>";
}


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

    function openproject(index){
        console.log(index);
        document.querySelector('#popup_header').innerHTML = data[index].name;
        document.getElementById('popupimg').src = '/img/' + data[index].image;
        modal.style.display = 'flex';
    }
    
    modalTriggerButton.addEventListener('click', event => {
        modal.style.display = 'flex';
        // document.body.style.overflow = 'hidden';
    });

    // modalTriggerButton.addEventListener('click', event => {
    //     const popupSec = document.querySelector('#popup');
    //     popupSec.innerHTML = "<div>fgsdfgsdfhfgh</div>";
    // });
    
    madalCloseButton.addEventListener('click', event => {
        modal.style.display = 'none';
        // trialSec.style.display = 'none';
        // document.body.style.overflow = 'initial';
    });
    












