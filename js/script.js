let hamBtn = document.querySelector('.ham-menu');
let sideNav = document.querySelector('.sidenav');

hamBtn.addEventListener('click',(e)=>{
   toggleSideNav();
});


function toggleSideNav(){
    if(sideNav.style.visibility === "" || sideNav.style.visibility === "hidden"){
        sideNav.style.visibility = "visible";
        backdrop.style.display = "block";
    }else{
        sideNav.style.visibility = "hidden";
        backdrop.style.display = "none"
    }
}

backdrop.addEventListener('click',(e)=>{
    toggleSideNav();
});

let xMark = document.querySelector('.xMark');
xMark.addEventListener('click',()=>{
    toggleSideNav();
});