const nextE1 =document.querySelector(".next");

const prevE1 = document.querySelector(".prev");

const imgs = document.querySelectorAll("img");

const imagecontainerE1 = document.querySelector(".image-container");

let currentimg = 1;

let timeout;

nextE1.addEventListener("click",() =>{
    currentimg++;
    clearTimeout(timeout);
    updateimg()
})

prevE1.addEventListener("click", () =>{
    currentimg--;
    clearTimeout(timeout);
    updateimg()

})

updateimg()

function updateimg(){
    if(currentimg > imgs.length){
        currentimg = 1;
    }else if(currentimg < 1){
        currentimg = imgs.length;
    }
    imagecontainerE1.style.transform = `translateX(-${(currentimg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentimg++
        updateimg()
    }, 3000);
}