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

// form submit

function sendHi(){
    alert('Not implemented yet!')
    // var name = $('#name')[0].value;
    // var email = $('#email')[0].value;
    // var msg = $('#msg')[0].value;
    // var userMessage = {'name':name,'email':email,'msg':msg};

    // $.ajax({
    //     url:'',
    //     method:'post',
    //     data:userMessage,
    //     headers:{
    //         'access-control-allow-origin':'*',
    //         'access-control-allow-credential':'true'
    //     },
    //     success:function(e){
    //         alert('Thank you, I will contact you soon..');
    //     },
    //     error:function(e){
    //         alert('sorry! something was wrong please try agian later!');
    //     }
    // });

};
