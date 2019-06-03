$('input').focus(function(){
    $(this).parent().addClass('active');
    $('input').focusout(function(){
        if ($(this).val() == ''){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    })
})