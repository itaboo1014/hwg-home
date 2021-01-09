$(function() {

    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。
    $("#header-icon, #header-home-btn").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。


    //ヘッダーメニューボタンを押した時にボタンが変化しリンクメニューが表示/非表示され、背景の固定が、有効/無効になる処理。
    var scrollPosition;
    $("#header-menu-btn").on("click", function() {
        if ($(this).hasClass('header-menu-btn-active')) {
            $(this).html('<span class="fa fa-bars"></span>');
            $(this).removeClass('header-menu-btn-active');
            $("#main-menu").addClass("main-menu-close");
            $('body').removeClass('fixed').css({ 'top': 0 });
            window.scrollTo(0, scrollPosition);
        } else {
            $(this).html('<span class="fa fa-times"></span>');
            $(this).addClass('header-menu-btn-active');
            $("#main-menu").removeClass("main-menu-close");
            scrollPosition = $(window).scrollTop();
            $('body').addClass('fixed').css({ 'top': -scrollPosition });
        }
    });
    //ヘッダーメニューボタンを押した時にボタンが変化しリンクメニューが表示/非表示され、背景の固定が、有効/無効になる処理。

});