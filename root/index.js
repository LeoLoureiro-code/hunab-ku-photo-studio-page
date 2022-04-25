const fade = document.querySelectorAll(".fade");


/* Function to change hero image */
const changeHero = () =>{
    let counter = 0;
    if(counter < carrousselImages.length -1){
        document.getElementById('home').style.backgroundImage = "url("+carrousselImages[counter] +")";
         counter++;
         console.log(carrousselImages[counter])
     }else{
         counter = 0;
    }
}

changeHero(carrousselImages);


/*
Function to fade-in page's components
*/ 
const showScroll = () =>{
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < fade.length; i++){
        let height = fade[i].offsetTop;
        if(height - 500 < scrollTop){
            fade[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);
window.addEventListener('load', changeHero);
