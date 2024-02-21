const $ = (name)=>document.querySelector(name);
const $menuAmbur = $(".header__container-menu"),
    $layautImg  = document.querySelector('.layout__perfil .layout__img');

const animateScroll = (element)=> element.classList.add("animated-scroll");

document.addEventListener("DOMContentLoaded", (e)=>{
  setTimeout(animateScroll($layautImg),
    6000);
});

document.addEventListener("click", (e)=>{
    if(e.target.id === "figure-menu")
    {
        $menuAmbur.classList.toggle("header__container-menu--active");
    }
});