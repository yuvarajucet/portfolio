function menuBar(){
    if($('.checkbtn').css('display') === 'block'){
        if($('.menuOption').hasClass('showMenuBar')){
            $('.menuOption').removeClass('showMenuBar');
        } else{
            $('.menuOption').addClass('showMenuBar');
        }
    }
}
function changeEye(){
    if($('.fa-solid').hasClass('fa-eye')){
        $('.fa-solid').removeClass('fa-eye');
    } else{
        $('.fa-solid').addClass('fa-eye');
    }
}