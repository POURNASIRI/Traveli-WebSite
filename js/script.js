// preloader

const preloader = document.querySelector(".preloader")

window.addEventListener("load",()=>{
    setTimeout(()=>{
        preloader.classList.add("remove")
    },2000)
   
})