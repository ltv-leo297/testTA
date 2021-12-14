$(function() {
    $('body').append('<div class="popup-panel"></div>');
    $(document).mouseup(function(e) {
        if ($(e.target).closest(".popup-form").length === 0) {
            closePanel();
        }
    });
});


function openPanel() {
    $(".popup-panel").addClass('active');
}

function closePanel() {
    $(".popup-panel").removeClass('active');
}

// param is user's invite code
function popupShare(param) {
    $(".popup-panel").html(`
        <div class="popup-form booth">
            <img class="popup-bg" src="./asset/image/bg.png">
            <div class="content-wrapper">
            <p class="text">Xác nhận chia sẻ mã mời:<br>` + param + `</p>
            </div>
            <div class="btn-wrapper">
                <a href="javascript:void(0)" onclick="ShareFB('` + param + `')" tabindex="0" class="oneBtn"> <img alt="shareFacebook" src="./asset/image/btn.png"></a>
            </div>
        </div>
    `);
    openPanel();
}

function ShareFB(param) {
    var url_string = "https://motul.marvyco.com/";
    var link = "https://motul.marvyco.com/";
    var quote = encodeURIComponent("Tham gia ngay cùng mình nhé, mã mới của mình là: " + param);
    var hashtag = encodeURIComponent("#MotulVietnam");
    var appId = "500293834385699";
    window.open(`https://www.facebook.com/dialog/feed?app_id=` + appId + `&quote=` + quote + `&hashtag=` + hashtag + `&link=` + link + `&picture=` + link + `&redirect_uri=` + encodeURIComponent(url_string));

}