// cs6 document

$(document).ready(function () {
    let x =0;
    $('.love').click(function (e) { 
        e.preventDefault();
        console.log($('.love>i'));
        
        if (x==0) {
            $('.love>i').addClass('fas');
            $('.love1').text('Bỏ yêu thích');
            x=1;
        } else {
            $('.love1').text('Yêu thích');
            $('.love>i').removeClass('fas');
            x=0;
        }
    });

    var love = document.querySelectorAll('.fa-heartbeat');
    [...love].forEach(element => {
        element.addEventListener('click', function (e){
            element.classList.toggle('red');
            var num = element.parentElement.querySelector('.num-love').innerHTML;
            if(element.className=='fas fa-heartbeat red'){
                num++;
                element.parentElement.querySelector('.num-love').innerHTML=`${num}`
            } else{
                element.parentElement.querySelector('.num-love').innerHTML=`${num - 1}`;
            }
        });
    });

    var cmt = document.querySelectorAll('.fa-comments');
    [...cmt].forEach(element => {
        element.addEventListener('click', function(e){
            element.classList.toggle('red');
            var cmtShow = element.parentElement.parentElement.querySelector('.sub-cmt');
            cmtShow.classList.toggle('display-toggle');
        });
    });

    // hien thi pop-up

    $('.trailer').click(function (e) { 
        e.preventDefault();
        $('.popup').toggle();
        $('.section').toggleClass('blur');
        // $('.header').toggleClass('blur');
        // $('.footer').toggleClass('blur');


    });

    $('.popup .close').click(function (e) { 
        e.preventDefault();
        $('.popup').hide();
        $('.section').removeClass('blur');

    });


});