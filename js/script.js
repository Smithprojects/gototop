let sliderItem = $('.slider-info-item.true');
let sliderBullets = $('.slider-bullets-item');
let sliderInfo = $('.slider-info');
//sliderInfo.css('width', (sliderItem.length + 2)*100 + '%');
let count = 0;

//Автоматическое перелистывание слайдера
// let id = setInterval(function(){
//     $('.slider-side-right').click();
// }, 2000);

$('.slider-side-right').click(function(){

    //Автоматическое перелистывание слайдера
    // clearInterval(id);
    
    // id = setInterval(function(){
    //     $('.slider-side-right').click();
    // }, 2000);

    
    count++;
   
    sliderInfo.animate({
        left: -(count+1) * 100 + '%'
    },1000, function(){
        if (count >= sliderItem.length) {
            count = 0;
            sliderInfo.css('left', '-100%');
        }
    });

    sliderBullets.removeClass('active');
    sliderBullets.eq(count).addClass('active');
    
});

$('.slider-side-left').click(function(){
    
    //Автоматическое перелистывание слайдера
    // clearInterval(id);
    
    // id = setInterval(function(){
    //     $('.slider-side-right').click();
    // }, 2000);

    count--;
    
    sliderInfo.animate({
        left: -(count+1) * 100 + '%'
    },1000, function(){
        if (count <= -1) {
            count = sliderItem.length-1;
            sliderInfo.css('left', -(sliderItem.length)*100 + '%');
        }
    });

    sliderBullets.removeClass('active');
    sliderBullets.eq(count).addClass('active');
});

$('.slider-bullets-item').click(function(){
    
    //Автоматическое перелистывание слайдера
    // clearInterval(id);

    // id = setInterval(function(){
    //     $('.slider-side-right').click();
    // },2000);
      
    count = sliderBullets.index($(this));
    
    sliderInfo.animate({
        left: -(count+1) * 100 + '%'
    });

    sliderBullets.removeClass('active');
    $(this).addClass('active');
});


$('.nav-button').click(function(){
    $(this).toggleClass('open');
    // $('.nav-menu').slideToggle(500);
    $('.nav-menu').toggleClass('openmenu');
   
});


//Простой слайдер

// let id = setInterval(function(){
//     $('.slider-side-left').click();
// }, 2000);


// $('.slider-side-left').click(function(){
    
//     clearInterval(id);
    
//     id = setInterval(function(){
//         $('.slider-side-left').click();
//     }, 2000);

//     sliderInfo.eq(count).fadeOut();

//     if (count == 0){
//         count = sliderInfo.length-1;
//     } else {
//         count--;
//     }

//     sliderInfo.eq(count).css('display', 'flex').hide().fadeIn();
    
//     sliderBullets.removeClass('active');
//     sliderBullets.eq(count).addClass('active');
// });

// $('.slider-side-right').click(function(){
    
//     clearInterval(id);
    
//     id = setInterval(function(){
//         $('.slider-side-left').click();
//     },2000);

//     sliderInfo.eq(count).fadeOut();

//     if (count == sliderInfo.length-1){
//         count = 0;
//     } else {
//         count++;
//     }

//     sliderInfo.eq(count).css('display', 'flex').hide().fadeIn();
    
//     sliderBullets.removeClass('active');
//     sliderBullets.eq(count).addClass('active');
// });

// $('.slider-bullets-item').click(function(){
    
//     clearInterval(id);

//     id = setInterval(function(){
//         $('.slider-side-left').click();
//     },2000);
    
//     sliderInfo.eq(count).fadeOut();
//     count = sliderBullets.index($(this));
//     sliderInfo.eq(count).css('display', 'flex').hide().fadeIn();

//     sliderBullets.removeClass('active');
//     $(this).addClass('active');
// });

