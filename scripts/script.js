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

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
        if($('.top').css('display') == 'none'){
            $('.top').css('display','block');
        }
    } else{
        if($('.top').css('display') == 'block'){
            $('.top').css('display','none');
        }
    }
 });

function sendHi(){
    var name = $('#name')[0].value;
    var email = $('#email')[0].value;
    var msg = $('#msg')[0].value;
    var userData = {
        "name":name,
        "email":email,
        "msg":msg
    }
    $('#sayHi').html('sending...');
    $('#sayHi').attr('disabled',true);

    $.ajax({
        url:'https://support-chart.herokuapp.com/support',
        method:'POST',
        data:JSON.stringify(userData),
        headers:{
            'content-type':'applicatin/json',
            'access-control-allow-origin':'*',
            'access-control-allow-credential':'true'
        },
        success:function(data){
            console.log(data);
            if(data.code == 200){
                $('#sayHi').html('Sent!');
            }
        },
        error:function(data){
            console.log(data);
            $('#sayHi').html('Failed!');
            $('#sayHi').css('color','red');
        }
    });
    $('#name')[0].value = '';
    $('#email')[0].value = '';
    $('#msg')[0].value = '';
}
