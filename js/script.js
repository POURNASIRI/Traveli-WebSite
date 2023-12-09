// preloader

const preloader = document.querySelector(".preloader")

window.addEventListener("load",()=>{
    setTimeout(()=>{
        preloader.classList.add("remove")
    },1000)
   
})


// add event on multiple elements


const addEventListener = function(elements,eventType,callback){
    for(let i = 0,len = elements.length; i < len ; i++){
        elements[i].addEventListener(eventType,callback)
    }
}



// navbar Toggle for mobile
const navbar = document.querySelector(".navbar");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector(".overlay")

const toggleNav = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventListener(navTogglers,"click",toggleNav)




// header

const header = document.querySelector(".header")

window.addEventListener("scroll",function(){
    header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active")
})
