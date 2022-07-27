const buttonMenu = document.querySelector(".button_menu");
const header= document.querySelector(".header");
const containerNavegation = document.querySelector(".container_navegation");
const body = document.body;  


let posicionActual= 0;
let estadoButton = true; 

buttonMenu.addEventListener("click", function(){
    containerNavegation.classList.toggle("active_button_menu");
    if(estadoButton){
        body.setAttribute("style","overflow: hidden;");
        header.setAttribute("style","backdrop-filter:none");
        estadoButton = false;
    }else{
        body.setAttribute("style","overflow: visible;");
        header.setAttribute("style","backdrop-filter:blur(10px)");
        estadoButton = true;
    }
}); 

window.addEventListener("scroll", function(){
    if(this.window.scrollY > posicionActual){
        //baja
        if(estadoButton){
        header.classList.remove("active_header");
        header.classList.add("desactive_header");
        }
    }else{
        //sube
        header.classList.remove("desactive_header");
        header.classList.add("active_header");
    }
    if(this.window.scrollY === 0){
        header.classList.add("ocultar_box_shadow"); 
    }else{
        header.classList.remove("ocultar_box_shadow");
    }

    posicionActual = this.window.scrollY;
});

