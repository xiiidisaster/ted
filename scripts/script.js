// let img= document.querySelector('img');

// img.onclick = function() {

//     let src = img.getAttribute('src');

//     if(src == 'images/mozilla-logo.png'){
//         img.setAttribute('src','images/foundation-logo.png');
//     }else{
//         img.setAttribute('src','images/mozilla-logo.png');
//     }

// }

let heading = document.querySelector('h1');
let btn = document.querySelector('button');

function setUserName(){
    let myName =prompt('please enter your name:');
    if(!myName){
        setUserName()
    }
    localStorage.setItem('name', myName);
    heading.textContent = myName + " you're great";
}

if(!localStorage.getItem('name')){
    setUserName();
}else {
    heading.textContent = localStorage.getItem('name') + " you're great";
}

btn.onclick = function(){
    setUserName();
}

// localStorage.clear();