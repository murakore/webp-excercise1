let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './images/yunikon1.jpg') {
      myImage.setAttribute('src','./images/yunikon2.jpg');
    } else {
      myImage.setAttribute('src','./images/yunikon1.jpg');
    }
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Unicorn Name ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Unicorn Name ' + storedName;
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Unicorn Name ' + myName;
    }
}
