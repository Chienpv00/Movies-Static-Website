$(document).ready(function(){

    // sudung data() khi can gui du lieu ve server vaf gui lai client view
    // su dung attr() khi thay doi truc tiep du lieu tren dom

    $(".fa-filter").click(function (e) { 
        var x = $('.filter-1 >.selection').val();
        var y = $('.filter-2 >.selection').val();
        var z = $('.filter-3 >.selection').val();
        console.log(x);
        console.log(y);
        console.log(z);
        $(".s-item").show();
        if(x=='all'&&y=='all' && z=='all'){
            $(".s-item").show();
        } else{
            $(".s-item").show();
            if (x=='all' && y!='all' && z!='all') {
                $('.s-item[data-category!="'+y+'"]').hide();
                $('.s-item[data-year!="'+z+'"]').hide();
            } else if (x!='all' && y=='all' && z!='all') {
                $('.s-item[data-country!="'+x+'"]').hide();
                $('.s-item[data-year!="'+z+'"]').hide();
            } else if (x!='all' && y!='all' && z=='all') {
                $('.s-item[data-country!="'+x+'"]').hide();
                $('.s-item[data-category!="'+y+'"]').hide();
            } else if (x=='all' && y=='all' && z!='all') {
                $('.s-item[data-year!="'+z+'"]').hide();
            } else if (x=='all' && y!='all' && z=='all') {
                $('.s-item[data-category!="'+y+'"]').hide();
            } else if (x!='all' && y=='all' && z=='all') {
                $('.s-item[data-country!="'+x+'"]').hide();
            }
        }
        // kiem tra dieu kiem va hien thong bao
        if ($('.s-item:hidden').length==$('.row > .s-item').length){
            $('.warn-filter').show();
        } else {
            $('.warn-filter').hide();
        }        
    });






});