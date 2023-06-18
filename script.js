$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.dmenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
}); //click bur open / close