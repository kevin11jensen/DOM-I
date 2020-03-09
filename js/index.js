const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//nav-elements turned into array for access
const navElements = Array.from(document.getElementsByTagName('a'));
//for loop naming each nav link
for (let i = 0; i < navElements.length; i++) {
  navElements[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
  navElements[i].classList.add(`nav-item-${i+1}`);
}

//top-left
document.querySelector('.cta-text').getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];

document.querySelector('.cta-text').getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];
//top-right
let mainImg = document.querySelector("#cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);
//body
//features content
document.querySelector('.main-content').getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];

document.querySelector('.main-content').getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

//about content
document.querySelector('.main-content').getElementsByTagName('h4')[1].textContent = siteContent['main-content']['about-h4'];

document.querySelector('.main-content').getElementsByTagName('p')[1].textContent = siteContent['main-content']['about-content'];

//middle-image
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//services content
document.querySelector('.bottom-content').getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["services-h4"];

document.querySelector('.bottom-content').getElementsByTagName('p')[0].textContent = siteContent["main-content"]["services-content"];

//product content
document.querySelector('.bottom-content').getElementsByTagName('h4')[1].textContent = siteContent["main-content"]["product-h4"];

document.querySelector('.bottom-content').getElementsByTagName('p')[1].textContent = siteContent["main-content"]["product-content"];


//vision content
document.querySelector('.bottom-content').getElementsByTagName('h4')[2].textContent = siteContent["main-content"]["vision-h4"];

document.querySelector('.bottom-content').getElementsByTagName('p')[2].textContent = siteContent["main-content"]["vision-content"];

//contact-info
document.querySelector('.contact').getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"];

document.querySelector('.contact').getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];

document.querySelector('.contact').getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];

document.querySelector('.contact').getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];

//footer
document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0].textContent = siteContent["footer"]["copyright"];

//change nav color
Array.from(document.querySelector('nav').getElementsByTagName('a')).forEach(navElements => navElements.style.color = 'green');

//append new nav elements
const newNavElements = document.querySelector('nav');
const newNavElement11 = document.createElement('a');
const newNavElement12 = document.createElement('a');

newNavElements.appendChild(newNavElement11);
newNavElements.appendChild(newNavElement12);

newNavElement11.textContent = 'Blog';
newNavElement12.textContent = 'Download';

newNavElement11.style.color = 'green';
newNavElement12.style.color = 'green';

