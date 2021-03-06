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
                    required: "Vui l??ng nh???p email",
                },
                "password":{
                    required: "Vui l??ng nh???p password",
                    minlength: "H??y nh???p ??t nh???t 8 k?? t???"
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
                    required: "Vui l??ng nh???p email",
                    maxlength: "Ch??? nh???p t???i ??a 15 k?? t???"
                },
                "password":{
                    required: "Vui l??ng nh???p password",
                    minlength: "H??y nh???p ??t nh???t 8 k?? t???"
                }
            }
        });
        $.validator.addMethod("customPassword", function (value, element) {
            return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
        }, "H??y nh???p password t??? 8 ?????n 16 k?? t??? bao g???m ch??? hoa, ch??? th?????ng v?? ??t nh???t m???t ch??? s???");
    
    });