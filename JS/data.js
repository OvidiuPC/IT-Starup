const footerDate = document.getElementById("footerDate");
const getBackButton = document.querySelector(".get-back");

getBackButton.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
const year =  new Date().getFullYear();
// Footer part
footerDate.innerHTML = year;


window.addEventListener("scroll", ()=>{
    if(scrollY > 300){
        getBackButton.style.visibility ="visible";
    }else{
        getBackButton.style.visibility = "hidden";
    }
})
