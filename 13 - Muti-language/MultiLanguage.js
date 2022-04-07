$(function() {
    // Module Change language
    // Load data of selected language
    function changeLanguage(l10n,language = null){
        console.log("======= language", language);
        console.log("======= data", l10n);
        // domName là tên Id : #TrangChuMenu , #GioiThieuMenu, #KhongGianMenu,...
        // msg là giá trị của  #TrangChuMenu, #TrangChuMenu,... : Trang chủ, Giới thiệu, Không gian
        var domName, langData, msg, _results;

        // Lưu Giá trị default vào local
        // Nêu có sự thay đổi về language do client chọn ngôn ngữ khác thì 
        if(language != null)
            localStorage.MultiLanguage = language
        else if(typeof (localStorage.MultiLanguage) == 'undefined')
            language = localStorage.MultiLanguage = l10n.config.default;
        else
            language = localStorage.MultiLanguage;

        //Chúng ta thay đổi ngôn ngữ để tránh trường hợp F5 nó về lại trạng thái cũ thì phải lấy localStorage làm cờ

        // Load data of selected language
        langData = l10n.language[language]
        console.log("langData", langData);

        // push dữ liệu vào html
        _results = [];
        for (domName in langData) {
            msg = langData[domName];
            // Code thay doi noi dung title
            if ($(domName).get(0) && $(domName).get(0).tagName.toLowerCase() === 'title') {
                document.title = msg;
                continue;
            }
            // push du lieu vao và đẩy dữ liệu ra html bằng id.
            if (domName.length > 0) {
                _results.push($(domName).html(langData[domName]));
            } else {
                _results.push(void 0);
            }
        }

    };

    function selectLanguage(){
        $(".wrapper-menu__lang__list li").click(function() {
            const attr = $(this).attr("language");
            language = localStorage.MultiLanguage = attr;
            changeLanguage(l10n, language);
        });
    }

    $(function () {
        changeLanguage(l10n); // Chạy ngôn ngữ mặc định:  "default": "vn"
        selectLanguage();    // Thay đổi ngôn ngữ bằng select
    });
    
});
