"use strict";

var content = document.getElementById("content"),
rotatum = document.getElementById("rotatum"),
bio = document.getElementById("Bio"),
contacts = document.getElementById("Contacts"),
experience = document.getElementById("Experience"),
projects = document.getElementById("Projects");

const displaySet = (el, display) => {
    return el.style.display = display;
}

const displayGet = (el) => {
    return el.style.display;
}

const displayAlter = (el, value, ...others) => {
    if(el){
        if(displayGet(el) === "none"){
            displaySet(content, "grid");
            displaySet(rotatum, "block");
            displaySet(el, value);
        }
        else{
            displaySet(content, "none");
            displaySet(rotatum, "none");
            displaySet(el, "none");
        }
    }

    for(let i of others)
        displaySet(i, "none");
}

document.getElementById("home").addEventListener("click", function(){
    displayAlter(false, false, content, rotatum, bio, contacts, experience, projects);
}, false);

document.getElementById("bio").addEventListener("click", function(){
    displayAlter(bio, "block", contacts, experience, projects);
}, false);

document.getElementById("contacts").addEventListener("click", function(){
    displayAlter(contacts, "flex", experience, projects, bio);
}, false);

document.getElementById("experience").addEventListener("click", function(){
    displayAlter(experience, "block", projects, bio, contacts);
}, false);

document.getElementById("projects").addEventListener("click", function(){
    displayAlter(projects, "block", bio, contacts, experience);
}, false);