//CS6 Document

// hien thi menu mobile, tablet 
$(document).ready(function () {
    //hien thi menu doc
    $('.menu-header').click(function () { 
        $('.header-rwd').show();
    });

    $('.close-header-rwd').click(function () { 
        $('.header-rwd').hide();        
    });

    // Hien thi icon tim kiem de submit
    document.querySelector('#search').oninput=()=>{
    let x = document.querySelector('#search');
    if (x.value != '') {
        document.querySelector('.fa-search').style.display='inline-block';
    } else {
        document.querySelector('.fa-search').style.display='none';
    }
}

    // hien thi background khi scroll
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".header").style= "background-color: rgb(0,0,0) !important;";
    } else {
        document.querySelector(".header").style= "background-image: linear-gradient(rgb(0, 0, 0) 0%, rgba(0,0,0,0)) !important;";
    }
}
});
