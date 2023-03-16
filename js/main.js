// ACTIVE SCROLL

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.add('active');
      });
    } else {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});


// PorfolioFilter
const buttons = document.querySelectorAll('.btn-menu');
const images = document.querySelectorAll('.proyecto');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault()


    const filter = e.target.dataset.filter;

    images.forEach((item) => {
      if(filter === 'all'){
        item.style.display = 'block';
      }else{
          if(item.classList.contains(filter)){
            item.style.display = 'block';
          }else{
            item.style.display = 'none';
                }
          }
      })
    });
});



// ChangeNabarColor

const nav = document.querySelector('header');

function navbarChangeColor() {
  var scrollPos = window.scrollY;

  if(scrollPos > 50){
    nav.style.backgroundColor = 'rgb(17, 37, 121,0.7)';
    nav.style.boxShadow = "0 -5px 10px #fff";
  }else{
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = "none";
  }

}

window.onscroll = navbarChangeColor;



//  WOW  ANIMATION
new WOW().init();



// GSAP ANIMATION
const tl = gsap.timeline({defaults: {ease: 'bounce.out', delay: 0.5}});

tl.fromTo(".title-hero", {opacity: 0, y: -120}, {opacity: 1, y: 'initial', duration: 1.5});
tl.fromTo(".quote-hero", {opacity: 0, y: 50}, {opacity: 1, y: 'initial', duration: 1.2, ease: "power2.out"});



// ANIMATION SPAN HERO
const text = document.querySelector(".studio");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: false
})

.add({
  targets: '.studio span',
  translateX: [0, 0],
  scale: [1,10],
  opacity: [1,1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: anime.stagger(200),
})


.add({
    targets: '.studio span',
    translateY: [-600, 0],
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.studio span',
    translateX: [0, -1000],
    scale: [1,1],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})

.add({
    targets: '.studio span',
    translateX: [1000, 0],
    scale: [1,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.studio span',
    translateX: [0, 0],
    scale: [1,10],
    opacity: [1,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})


// CurrentYear

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;



// SCROLL MOOTH
/*var smoothScroll = {

  move : function (old, des, actual) {
    ease = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = ease(actual / 100);
    delta = des - old;
    delta *= ease;
    delta += old;
    window.scrollTo(0, delta);
    if (actual < 100) {
      window.requestAnimationFrame(function () {
        smoothScroll.move(old, des, actual);
      });
    }
  },

  linkInit : function (e) {
    e.preventDefault();
    link = e.target.getAttribute("href").substr(1);
    block = document.getElementById(link).offsetTop;
    client = document.documentElement.scrollTop;

    smoothScroll.move(client, block, 0);
  },

  init : function () {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      link = links[i].getAttribute("href");
      if (link.search("#") == 0 & link.substr(1) != "") {
        links[i].onclick = smoothScroll.linkInit;
      }
    }
  }
};

window.onload = smoothScroll.init; */


// HideNavbar
const navLink = document.querySelectorAll('.nav-link');
const checkbox = document.querySelector('input[type=checkbox]');
const filterNa = document.querySelector('.filter-nav');

navLink.forEach(link => {
    link.addEventListener('click', function() {
        checkbox.checked = false;
        filterNa.style.display = "none";
    });
});


const checkB = document.querySelector('input[type=checkbox]');
const filterNav = document.querySelector('.filter-nav');

if(checkB === true) {
  filterNav.style.display = "block";
}else{
  filterNav.style.display = "none";
}

checkB.addEventListener('change', function() {
  if (checkB.checked) {
    filterNav.style.display = "block";
  } else {
    filterNav.style.display = "none";
  }
});


// LIGHT GALLERY
lightGallery(document.getElementById('lightgallery'));