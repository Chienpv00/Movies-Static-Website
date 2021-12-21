// kiem thu dau vao va hien thi canh bao
$('button').click(function (e) { 
    e.preventDefault();
    if ($('#username').val() == 'chien' && $('#pw').val() == '123456' ){
        window.location=('home.html');
    } else{
        if($('#username').val().length < 1 && $('#pw').val().length < 1){
            $('.g-pw').css('margin-bottom', '5px');
            $('.noti-pw2').css('display', 'block');
            $('.g-user').css('margin-bottom', '5px');
            $('.noti-user').css('display', 'block');
        }else

        if($('#pw').val().length <6 && $('#pw').val().length >0){
            $('.g-pw').css('margin-bottom', '5px');
            $('.noti-pw').css('display', 'block');
        } else{
            $('#noti-acc').css('display', 'block');
        }
    }
});

$('#pw').keypress(function(){
    $('.g-pw').css('margin-bottom', '20px');
    $('.noti-pw').css('display', 'none');
    $('#noti-acc').css('display', 'none');
    $('.noti-pw2').css('display', 'none');

})

$('#username').keypress(function(){
    $('.g-user').css('margin-bottom', '20px');
    $('.noti-user').css('display', 'none');
    $('#noti-acc').css('display', 'none');
})

// quen mat khau
$('.quen').click(function(){
    $('.forgot-pw').css('display', 'block');
    $('.main').css('display', 'none');
});

$('.gui').click(function (){
    $('.forgot-pw').css('display', 'none');
    $('.main').css('display', 'block');
});

const rmbAcc = document.querySelector('.remember-acc');
const rmbCheck = document.querySelector('#savepw');
const eyePw = document.querySelector('.eye-pw');
const pw = document.querySelector('#pw')
let x=1;

// Nho tai khoan
rmbAcc.addEventListener('click',function (){
    rmbCheck.click();
});

// hien thi mat khau

eyePw.addEventListener('click', ()=>{
    if (x==1) {
        pw.type='text';
        eyePw.classList.add('fa-eye-slash');
        x=0
    } else {
        pw.type = 'password';
        eyePw.classList.remove('fa-eye-slash');
        x=1;
    }
});



