$(document).ready(function(){
    $(".main").onepage_scroll({
        sectionContainer: "section",     
        easing: "ease",                         
        animationTime: 1000,             
        pagination: true,                
        updateURL: false,                
        loop: false,                     
        keyboard: true,                  
        responsiveFallback: false,
        direction: "vertical"            
    });

    $('.suite').on('click', function(e){
        $('.main').moveDown();
    });

    $('.false').on('click',function(e){
        $(this).removeClass('blue');
        $(this).removeClass('red');
        $(this).removeClass('green');
        $(this).removeClass('dark');
        $(this).removeClass('light');
        $(this).addClass('red-reponse');

    });

    $('.true').on('click',function(e){
        $(this).removeClass('blue');
        $(this).removeClass('red');
        $(this).removeClass('green');
        $(this).removeClass('dark');
        $(this).removeClass('light');
        $(this).addClass('green-reponse');   
    });

    $('.feedback').on('click', function(e) {
        $('.feedback').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.result').on('click',function(e){
        var score = ($('.green-reponse').size()*$('.true').size()) - $('.red-reponse').size();
        var total = $('.false').size() + $('.true').size();
        $('#score-zone').text(score+"/"+total);
    });

});
