// FAQS TOGGLES --> this one toggles only one open at a time
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


// Transitions firing onload fix
document.addEventListener("DOMContentLoaded", function() {
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions');
  });





// Collapsable burger on small devices + opaque background when opened
const burger = document.getElementById('burger');
const ul = document.querySelector('ul');
const links = document.querySelectorAll('ul li a');
const container = document.querySelector('.background-opacity');





burger.addEventListener('click', (e) => {
    if(ul.classList != 'show'){
        burger.classList.toggle('open');
        ul.classList.toggle('show');
        container.classList.toggle('burger-opened');
    } else {
        burger.classList.toggle('open');
        ul.classList.toggle('show');
        container.classList.toggle('burger-opened');
    }

    e.preventDefault();
})

burger.addEventListener('touchend', (e) => {
    if(ul.classList != 'show'){
        burger.classList.toggle('open');
        ul.classList.toggle('show');
        container.classList.toggle('burger-opened');
    } else {
    burger.classList.toggle('open');
    ul.classList.toggle('show');
    container.classList.toggle('burger-opened');
    }

    e.preventDefault();
})


document.addEventListener('click', (e) => {
    if(e.target.parentElement.parentElement != 'ul.navbar.show'){
        // console.log(e);
        
        burger.classList.remove('open');
        ul.classList.remove('show'); 
        container.classList.remove('burger-opened');       
    }
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        ul.classList.remove('show');
        container.classList.remove('burger-opened');
    })
})




// ScrollTop gentle (fix)
window.onload = function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
};




// FORM CONTROL - VALIDATION
const submitBtn = document.getElementById('form-submit');
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const surname = document.getElementById('surname');
const street = document.getElementById('street');
const zip = document.getElementById('zip');
const dayPhone = document.getElementById('dayPhone');
const email = document.getElementById('email');
const emailVerify = document.getElementById('email-verify');



form.addEventListener('click', (e) => {

    
    // e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values of inputs
    const firstNameValue = fname.value.trim();
    const surnameValue = surname.value.trim();
    const streetValue = street.value.trim();
    const zipValue = zip.value.trim();
    const emailValue = email.value.trim();
    const emailVerifyValue = emailVerify.value.trim();

    console.log(firstNameValue);
    


    if(firstNameValue === ''){
        // show error
        // add error class
        setErrorFor(fname, 'Please provide your first name');
    } else {
        // add success class
        setSuccessFor(fname)
    }

    if(surnameValue === ''){
        // show error
        // add error class
        setErrorFor(surname, 'Please provide your last name');
    } else {
        // add success class
        setSuccessFor(surname)
    }

    if(streetValue === ''){
        // show error
        // add error class
        setErrorFor(street, 'Please provide your street');
    } else {
        // add success class
        setSuccessFor(street)
    }

    if(zipValue === ''){
        // show error
        // add error class
        setErrorFor(zip, 'Please provide your zip code');
    } else {
        // add success class
        setSuccessFor(zip)
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email)
    }

    if(emailVerifyValue === ''){
        setErrorFor(emailVerify, 'Email confirmation cannot be blank');
    } else if(emailValue !== emailVerifyValue){
        setErrorFor(emailVerify, 'The emails provided do not match');
    } else {
        setSuccessFor(emailVerify);
    }


    // show a success message
    // const formControl = document.querySelector('.form-control');

    // if(formControl.className === 'form-control success'){
    //     alert('Form Successfully Submitted');
    // }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error inside small
    small.innerText = message;

    // add error class
    formControl.className = 'group error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'group success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


