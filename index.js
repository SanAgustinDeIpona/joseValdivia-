const $ = (name)=>document.querySelector(name);
const $menuAmbur = $(".header__container-menu"),
    $layautImg  = document.querySelector('.layout__perfil .layout__img'),
    $layautDescription  = document.querySelector('.layout__info'),
    $layautInfo  = document.querySelector('.layout__description'),

    $aboutContainerMy  = document.querySelector('.abaut__info-my'),
    $aboutContainerChildrenMy  = document.querySelectorAll('.abaut__info-my .abaut__container > .abaut__title, .abaut__info-my .abaut__container > .abaut__img, .abaut__info > .abaut__descrip-my '),
    
    $aboutContainerFrondend  = document.querySelector('.abaut__info-frontend'),
    $aboutContainerChildrenFronend  = document.querySelectorAll('.abaut__info-frontend .abaut__container > .abaut__title, .abaut__info-frontend .abaut__container > .abaut__img, .baut__info > .abaut__descrip-frontend'),
    
    $projectInfo  = document.querySelector('.project__info'),
    $projectInfoChildren  = document.querySelectorAll('.project__info > .project__title, .project__info > .projet__infor-img, .project__info > .project__description'),

    $projectTask = document.querySelector(".project__task"),
    $projectTaskChildren = document.querySelectorAll(".project__task, .project__task > .project__container-img, .project__task > .project__task-title, .project__task > .project__task-description, .project__button"),

    $projecTweathermap = document.querySelector(".project__weather"),
    $projectWeaethermapkChildren = document.querySelectorAll(".project__weather, .project__weather > .project__container-img, .project__weather > .project__task-title, .project__weather > .project__task-description, .project__button");


const animateScroll = (element)=> {
    for (let index = 0; index < element.length; index++) {
        const item = element[index];
        item.setAttribute("id", "animated-scroll");
    }
};

const oberverElement = (obser, item)=>{
    let observer = new IntersectionObserver((entries)=>{
        let block = entries[0];

        if(block.isIntersecting)
        {
            animateScroll(item);    
            observer.unobserve(obser);
        }
    }, {threshold: "0.5"});
    observer.observe(obser);
};

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        animateScroll([
            $layautImg,
            $layautInfo,
            $layautDescription
        ]);
    },
    7000);

    oberverElement($aboutContainerMy, $aboutContainerChildrenMy);
    oberverElement($aboutContainerFrondend, $aboutContainerChildrenFronend);
    oberverElement($projectInfo, $projectInfoChildren);
    oberverElement($projectTask, $projectTaskChildren);
    oberverElement($projecTweathermap, $projectWeaethermapkChildren);
});

document.addEventListener("click", (e)=>{
    if(e.target.id === "figure-menu")
    {
        $menuAmbur.classList.toggle("header__container-menu--active");
    }
});