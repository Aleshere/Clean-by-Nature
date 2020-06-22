// FAQS --> this one toggles only one open at a time
// Ref  - http://stackoverflow.com/questions/37745154/only-open-one-accordion-tab-at-one-time

document.addEventListener("DOMContentLoaded", function(event) { 


    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName('panel');
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            var setClasses = !this.classList.contains('active');
            setClass(acc, 'active', 'remove');
            setClass(panel, 'show', 'remove');
    
            if (setClasses) {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            }
        }
    }
    
    function setClass(els, className, fnName) {
        for (var i = 0; i < els.length; i++) {
            els[i].classList[fnName](className);
        }
    }
    
});




const burger = document.getElementById('burger');
const ul = document.querySelector('ul');
const links = document.querySelectorAll('ul li a');




burger.addEventListener('click', (e) => {
    if(ul.classList != 'show'){
        burger.classList.toggle('open');
        ul.classList.toggle('show');
    } else {
        burger.classList.toggle('open');
        ul.classList.toggle('show');
    }

    e.preventDefault();
})

burger.addEventListener('touchend', (e) => {
    if(ul.classList != 'show'){
        burger.classList.toggle('open');
        ul.classList.toggle('show');
    } else {
    burger.classList.toggle('open');
    ul.classList.toggle('show');
    }

    e.preventDefault();
})

document.addEventListener('click', (e) => {
    if(e.target.querySelector.value != '.navbar'){
        burger.classList.remove('open');
        ul.classList.remove('show');        
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
})







// burger.addEventListener('click', () => {
//     if(ul.style.display === 'none'){
//         ul.style.display = 'flex';
//     } else {
//     ul.classList.toggle('show');
//     }
// })



// function copyrightUpdate() {

// var date = new Date().getFullYear()>2008&&document.write("-"+new Date().getFullYear());
// document.getElementById("year").innerHTML = date
// }
