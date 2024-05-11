import { generateHome } from './home.js';
// import { generateMenu } from './menu.js';
import { generateContact } from './contact.js';
import  menuItems  from './Menuitems.js';

function clearDom() {
    document.getElementById("content").innerHTML = "";
}

let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", function(){
    clearDom();
    generateHome(); 
});

let menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", function(){
    clearDom();
    menuItems();
    
});

let contactBtn = document.getElementById("contact");
contactBtn.addEventListener("click", () => {
    // generateContact();

    clearDom();
    generateContact();
});

generateHome();