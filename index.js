const nextE1 =document.querySelector(".next");

const imgs = document.querySelectorAll("img");


const imagecontainerE1 = document.querySelector(".image-container");

let currentimg = 1;

nextE1.addEventListener("click",() =>{
    currentimg++;
    updateimg()
})

function updateimg(){
    if(currentimg > imgs.length){
        currentimg = 1;
    }
    imagecontainerE1.style.transform = `translateX(-${(currentimg - 1) * 500}px)`;
}