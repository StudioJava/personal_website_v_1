// JavaScript Document
$(document).ready(function(){
     $('i').hide();
 $('#btn1').mouseenter(function(){
     $(this).addClass('hvr-sweep-to-right');
     $('i').show('slow');
 });
$('#btn1').mouseleave(function (){
    $('i').hide('slow');
});
    $('#btn2').mouseenter(function(){
     $(this).addClass('hvr-sweep-to-right');
     $('i').show('slow');
 });
$('#btn2').mouseleave(function (){
    $('i').hide('slow');
});
});

