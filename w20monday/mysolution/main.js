"use strict";

let cookieDiv = document.querySelector("#cookieInfoBar");

function showCookieBar(){
    setTimeout(function(){ 
        cookieDiv.style.transform = "translateY(0vh)";
     }, 500);


}

function agreeClicked(){
    cookieDiv.style.transform = "translateY(25vh)";
    setTimeout(function(){ 
        cookieDiv.style.display = "none";
     }, 2500);
}











document.addEventListener("DOMContentLoaded", showCookieBar);
