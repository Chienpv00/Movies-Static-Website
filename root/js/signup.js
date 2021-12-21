$('#email').keypress(function(){
    $('.g-user').css('margin-bottom', '20px');
    $('.noti-user').css('display', 'none');
    $('#noti-acc').css('display', 'none');
})

const eyerPw = document.querySelector('.eye-rpw');
const rpw = document.querySelector('#rpw')
let y=1;

eyerPw.addEventListener('click', ()=>{
    if (y==1) {
        rpw.type='text';
        eyerPw.classList.add('fa-eye-slash');
        y=0
    } else {
        rpw.type = 'password';
        eyerPw.classList.remove('fa-eye-slash');
        y=1;
    }
});