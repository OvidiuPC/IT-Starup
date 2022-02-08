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

//counter


const counters = document.querySelectorAll('.counter');


counters.forEach(counter =>{
    counter.innerText = '0'

    const updateCounter = ()=>{
            const target = +counter.getAttribute('data-target')
    const c = parseInt(counter.innerHTML) 

    const increment = target / 2000;

     if(c < target){
         counter.innerHTML = `${Math.ceil(c + increment)}`
         setTimeout(updateCounter ,10)
     }else{
         counter.innerText = target
     }
    }
 updateCounter()

})
