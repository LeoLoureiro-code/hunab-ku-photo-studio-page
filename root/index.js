const hamburger = document.getElementById("check-btn");
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const links = Array.from(document.getElementsByClassName('link'));
const ul = document.getElementById("link-list");
const section = document.querySelectorAll('section');
const navList = document.querySelectorAll('header nav ul li');
const hero = document.getElementById('home');
let clicked = false


const show = () =>{
    
}

setInterval(
    () => {show()}, 
    4000);

/*
    Make navbar appears and disappears clicking hamburger menu
*/
hamburger.addEventListener('click', () =>{
    if(clicked === false){
        ul.style.left = "0"
        clicked = true;
    }else{
        ul.style.left = "-100%";
        clicked = false;
       
    }
})

/*
    Make navbar appears and disappears clicking an anchor
*/
links.forEach(link => {
        link.addEventListener('click', () =>{
            ul.style.left = "-100%"
            clicked = false;
        })
})

window.addEventListener('scroll', () =>{
    let current = "";
    section.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(window.scrollY > sectionTop){
            current = section.getAttribute('id');
        }
    })
    navList.forEach(li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            // li.classList.add('active');
            console.log(li)
        }
    })
})