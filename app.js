const menue = document.querySelector('.menue_bar');
const wrapper = document.querySelector('.nav_wrapper');
const MenueLinks = document.querySelector('.menue_bar_desktop');
menue.addEventListener('click', () => {
  menue.classList.toggle('a');
  MenueLinks.classList.toggle('active');
  wrapper.classList.toggle('.navopen');
});
const menuBarHide = () => {
  const menuBars = document.querySelector('.a');
  if (window.innerWidth <= 960 && menuBars) {
    menue.classList.toggle('a');
    MenueLinks.classList.remove('active');
  }
};
MenueLinks.addEventListener('click', menuBarHide);
MenueLinks.addEventListener('click', menuBarHide);
const data = [{
  name: 'Tonic', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic1.png', srclink: 'https://github.com/addisalemseifu/Portofolio-Desktop-Version__Rep', livelink: 'https://addisalemseifu.github.io/Portofolio-Desktop-Version__Rep/', listOne: 'Uber',
},
{
  name: 'Multi-Post Stories', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic2.png', srclink: 'https://github.com/addisalemseifu/Portofolio-Desktop-Version__Rep', livelink: 'https://addisalemseifu.github.io/Portofolio-Desktop-Version__Rep/',
},
{
  name: 'Tonic', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic3.png', srclink: 'https://github.com/addisalemseifu/Portofolio-Desktop-Version__Rep', livelink: 'https://addisalemseifu.github.io/Portofolio-Desktop-Version__Rep/',
},
{
  name: 'Multi-Post Stories', description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.', image: 'pic4.png', srclink: 'https://github.com/addisalemseifu/Portofolio-Desktop-Version__Rep', livelink: 'https://addisalemseifu.github.io/Portofolio-Desktop-Version__Rep/',
}];
const output = document.querySelector('#portfolio');
for (let x = 0; x < data.length; x += 1) {
  output.innerHTML = `${output.innerHTML}<div class='covers'><img class='img__class' src='/img/${data[x].image}'><div class='right__box'><h1 class='popup_tekst'>${data[x].name}<ul class='selections'><li class='main__txt__wrapper'><a href='#' class='main__txt' id='canopy_1'>CANOPY</a></li><li class='main__txt__wrapper'><a href='#' class='main__txt' id='canopy_2'>FACEBOOK</a></li><li class='circle__wrapper'><a href='#' class='circle'></a></li><li class='list__wrapper'><a href='#' class='list' id='back__1'>BACK END DEV</a></li><li class='list__wrapper'><a href='#' class='list' id='back__2'>Full Stack Dev</a></li><li class='circle__wrapper'><a href='#' class='circle'></a></li><li class='list__wrapper'><a href='#' class='list'>2015</a></li></ul></h1><p class='signup-disc'>${data[x].description}<ul class='platform'><li class='pla__btn'>html</li><li class='pla__btn'>css</li><li class='pla__btn'>javascript</li></ul></p><button onclick='openproject(${x})' class='see-project'>see project</button></div></div>`;
}
// const modalTriggerButton = document.querySelector('.see-project');
const modal = document.querySelector('#popup');
const madalCloseButton = document.querySelector('.closeBtn');
function openproject(index) {
  document.querySelector('#popup_header').innerHTML = data[index].name;
  document.getElementById('popupimg').src = `/img/${data[index].image}`;
  modal.style.display = 'flex';
}
// openproject(0);
// modalTriggerButton.addEventListener('click', () => {
//   modal.style.display = 'flex';
// });
madalCloseButton.addEventListener('click', () => {
  modal.style.display = 'none';
  openproject(null);
});

const email = document.getElementById('my_email');
const form = document.querySelector('.main__form');
const erorElement = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  const messages = [];
  const arr = email.value;
  // let count = 0;

  if (arr !== arr.toLowerCase()) {
    messages.push('Error: Email should be all in lowercase');
  }
  if (messages.length > 0) {
    e.preventDefault();
    erorElement.innerHTML = messages;
  }
});

//         const emailMobile = document.getElementById('email');
//           const formMobile = document.getElementById('mobielForm');
// const erorElementMobile = document.querySelector('.errorMobile');

// form.addEventListener('submit', (e) => {
//   let messagesMobile = [];
//   let arrMobile = emailMobile.value;
//   // let count = 0;

//     if (arrMobile !== arrMobile.toLowerCase()) {
//       messages.push('Error: Email should be all in lowercase');
//           }
//           if (messagesMobile.length > 0) {
//             e.preventDefault();
//             erorElementMobile.innerHTML = messagesMobile;
//           }
//         });
