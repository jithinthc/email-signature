$('.textBanner').hide();
$('.imgBanner').hide();
$('#textBanner').on('change', function() {
    $('.imgBanner').hide();
    $('.textBanner').show();
 });
 $('#imageBanner').on('change', function() {
    $('.textBanner').hide();
    $('.imgBanner').show();
 });