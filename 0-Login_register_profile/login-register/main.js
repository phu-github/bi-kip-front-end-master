$(function() {
    //Moudle: login, register
        // 1. switch display login, register
        $(".login-sw").on('click', function(){
            $(".auth__login").css("display", "none");
            $(".auth__register").css("display", "block");
        });
        $(".register-sw").on('click', function(){
            $(".auth__register").css("display", "none");
            $(".auth__login").css("display", "block");
        });
        // 2. show hide password
        var  showlog= true;
        var  showres= true;
        $(".loginform__label__eye").on('click', function(){
            showlog= !showlog;
            console.log('showlog = ',showlog);
            if(showlog == true){
                $("#login__items__pass").attr("type", "password");
                $('.log-eye-text').text('show');
                $('.log-eye-icon-show').css('display', 'block');
                $('.log-eye-icon-hide').css('display', 'none');
            }
            if(showlog == false){
                $("#login__items__pass").attr("type", "text");
                $('.log-eye-text').text('hide');
                $('.log-eye-icon-show').css('display', 'none');
                $('.log-eye-icon-hide').css('display', 'block');
            }
        });
        $(".registerform__label__eye").on('click', function(){
            showres= !showres;
            console.log('showlog = ',showres);
            if(showres == true){
                $("#register__items__pass").attr("type", "password");
                $('.res-eye-text').text('show');
                $('.res-eye-icon-show').css('display', 'block');
                $('.res-eye-icon-hide').css('display', 'none');
            }else
            if(showres == false){
                $("#register__items__pass").attr("type", "text");
                $('.res-eye-text').text('hide');
                $('.res-eye-icon-show').css('display', 'none');
                $('.res-eye-icon-hide').css('display', 'block');
            }
        });
        // 3. validate
        $("#loginform").validate({
            errorClass:"invalid",
            rules: {
                "q-email":{
                    required: true,
                },
                "password": {
                    required: true,
                    minlength: 8
                }
            },
            messages: {
                "q-email": {
                    required: "Vui lòng nhập email",
                },
                "password":{
                    required: "Vui lòng nhập password",
                    minlength: "Hãy nhập ít nhất 8 ký tự"
                }
            }
        });
        $("#registerform").validate({
            //error place
            errorClass:"invalid",
            rules: {
                "q-email":{
                    required: true,
                    maxlength: 50
                },
                "password": {
                    required: true,
                    minlength: 8,
                    customPassword: true
                }
            },
            messages: {
                "q-email": {
                    required: "Vui lòng nhập email",
                    maxlength: "Chỉ nhập tối đa 15 ký tự"
                },
                "password":{
                    required: "Vui lòng nhập password",
                    minlength: "Hãy nhập ít nhất 8 ký tự"
                }
            }
        });
        $.validator.addMethod("customPassword", function (value, element) {
            return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
        }, "Hãy nhập password từ 8 đến 16 ký tự bao gồm chữ hoa, chữ thường và ít nhất một chữ số");
    
    });