"use strict";


$(function () {

    $("#panel2").slideUp(1000).slideDown(1500).hide(1200);

    $("#panel3").slideUp(1000).slideDown(1500).hide(1200);

    $("#panel2").toggle(1200);

    $("#panel3").toggle(1200);
});

$('#btn1').click(function () {
    $('#panel1').toggle(1500);
});

$('#btn4').hover(function(){
    $('#panel4').toggleClass('highlighted');

});

$('#btn3').hover(function () {
    $('body').toggleClass('background-mountain');
    $('div').toggleClass('transparent');
});

$('#btn2').click(function(){
    $('div.row>div').toggleClass('col-xs-3');
});





