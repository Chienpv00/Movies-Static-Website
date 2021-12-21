const img = document.querySelectorAll('.watching img');
const user = document.querySelector('.nav-user');
const device = document.querySelector('.nav-device');
const follow = document.querySelector('.nav-follow');
const watching = document.querySelector('.nav-watching');
const logout = document.querySelector('.nav-logout');


const Cuser = document.querySelector('.c-info');
const Cdevice = document.querySelector('.c-device');
const Cfollow = document.querySelector('.c-follow');
const Cwatching = document.querySelector('.c-watching');


const arrContent=document.querySelectorAll('.c-content');
const arrNav = document.querySelectorAll('.items');

const test = document.querySelector('.test');



user.addEventListener('click', ()=>{
    [...arrNav].forEach(element => {
        element.classList.remove('active');
    });
    [...arrContent].forEach(element => {
        element.style.display='none';
    });
    user.classList.add('active');
    Cuser.style.display='block';
});

device.addEventListener('click', ()=>{
    [...arrNav].forEach(element => {
        element.classList.remove('active');
    });
    [...arrContent].forEach(element => {
        element.style.display='none';
    });
    device.classList.add('active');
    Cdevice.style.display='block';
});

follow.addEventListener('click', ()=>{
    [...arrNav].forEach(element => {
        element.classList.remove('active');
    });
    [...arrContent].forEach(element => {
        element.style.display='none';
    });
    follow.classList.add('active');
    Cfollow.style.display='block';
});

watching.addEventListener('click', ()=>{
    [...arrNav].forEach(element => {
        element.classList.remove('active');
    });
    [...arrContent].forEach(element => {
        element.style.display='none';
    });
    watching.classList.add('active');
    Cwatching.style.display='block';
});

logout.addEventListener('click', ()=>{
    window.location.replace('login.html');
});



// hien thi nut close cho dang theo doi
[...img].forEach(element => {
    element.addEventListener('mouseover', (e)=>{
        element.parentElement.parentElement.querySelector('.close').style.display='block';
    });

    element.addEventListener('mouseleave', ()=>{
        element.parentElement.parentElement.querySelector('.close').style.display='none';
    });
});