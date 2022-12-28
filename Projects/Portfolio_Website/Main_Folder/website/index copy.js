const multiplier = 50;

for(let i=1; i<=50*multiplier; ++i)
    $('.mainContainer').append($('<div><div/>').addClass('dots'))

$('.dots').hover(function(event){
    $(this).addClass('dotsies')

    setTimeout(()=>{
        $(this).removeClass('dotsies')
    }, 1000)
})
