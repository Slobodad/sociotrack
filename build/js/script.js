'use strict';

$(document).ready(function() {

    //btn
    
        var dbBtn = $('.js-btn');
        var sectionModal = $('.js-container');
        var btnClose = $('.js-btn-close');
        var btnSend = $('.js-btn-send');
    
        dbBtn.on('click', function() {
            sectionModal.addClass('section__background--is-active');
            $("html,body").css("overflow","hidden");
        });
    
        btnClose.on('click', function() {
            sectionModal.removeClass('section__background--is-active');
            $("html,body").css("overflow","scroll");
        });
     
        btnSend.on('click', function() {
            sectionModal.removeClass('section__background--is-active');
            $("html,body").css("overflow","scroll");
        });  

   
    
});

var day = $('#js-btn-day');
var week = $('#js-btn-week');
var month = $('#js-btn-month')

    day.on('click', function() {
        $.ajax({
            url: "day.html",
        
            success: function(day){
                $('#dashboard').html(day);
            }
        });
    });

    week.on('click', function() {
        $.ajax({
            url: "week.html",
        
            success: function(week){
                $('#dashboard').html(week);
            }
        });
    });

    month.on('click', function() {
        $.ajax({
            url: "month.html",
        
            success: function(month){
                $('#dashboard').html(month);
            }
        });
    })
   

    $.ajax({
        url: "day.html",
    
        success: function(day){
            $('#dashboard').html(day);
        }
    });
