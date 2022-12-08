

// form validation in javascript

let uname=document.getElementById('name');
let mail=document.getElementById('email');
let contact=document.getElementById('phnum');

let validateform=()=>{
    if(uname.value=="")
    {
        alert('username cannot be empty');
        
       
    }
    // if(uname.value>99 && uname.value<=122)
    // {
    //     alert('character only');
       
    // }
    else if(uname.value.length <5)
    {
        alert('username cant be less than 5');
    }
//validation for email
if(mail.value.length<9){
    alert('Email cannot be less than 9 ');
}
//validation for phone number
if(contact.value.length<11){
    alert('Phone number cannot be less than 11 ');
}
else if(contact.value[0]!='+92'){
    alert('Phone number Should start form +92');
}

    return false;
}





//navbar code for responsive mode for product-details page when we clicked on product->1 three items...

let OpenBtn=document.querySelector('.bi-list');
let CloseBtn= document.querySelector('.bi-x-lg');
let hide=document.querySelector('.hiddenpdlinks');
OpenBtn.addEventListener("click" ,()=>{
    OpenBtn.classList.toggle('cross');
    CloseBtn.classList.toggle('cross');
    hide.classList.toggle('hiddenpdlinks');

});
CloseBtn.addEventListener("click" ,()=>{
    OpenBtn.classList.toggle('cross');
    CloseBtn.classList.toggle('cross');
    hide.classList.toggle('hiddenpdlinks');
});






