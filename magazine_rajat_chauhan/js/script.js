let hamBtn = document.querySelector('.ham-menu');
let sideNav = document.querySelector('.sidenav');

hamBtn.addEventListener('click',(e)=>{
   toggleSideNav();
});


function toggleSideNav(){
    if(sideNav.style.visibility === "" || sideNav.style.visibility === "hidden"){
        sideNav.style.visibility = "visible";
        backdrop.style.display = "block";
        document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;
    }else{
        sideNav.style.visibility = "hidden";
        backdrop.style.display = "none";
        document.body.style.position = '';
        document.body.style.top = '';
    }
}

backdrop.addEventListener('click',(e)=>{
    toggleSideNav();
});

let xMark = document.querySelector('.xMark');
xMark.addEventListener('click',()=>{
    toggleSideNav();
});