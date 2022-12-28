
$(".bio").click(function(){
    $('.info').css("display", "block")

    $(".projectsLinks").css("display", "none")
    $(".contactsdata").css("display", "none")
    $(".biodata").css("display", "block")
})

$(".bio").dblclick(function(){
    $('.info').css("display", "none")

    $(".biodata").css("display", "none")
})

$(".contact").click(function(){
    $('.info').css("display", "block")
    
    $(".projectsLinks").css("display", "none")
    $(".biodata").css("display", "none")
    $(".contactsdata").css("display", "block")
})

$(".contact").dblclick(function(){
    $('.info').css("display", "none")
    $(".contactsdata").css("display", "none")
})

$(".projects").click(function(){
    $('.info').css("display", "block")

    $(".contactsdata").css("display", "none")
    $(".biodata").css("display", "none")
    $(".projectsLinks").css("display", "block")
})

$(".projects").dblclick(function(){
    $('.info').css("display", "none")
    $(".projectsLinks").css("display", "none")
})

$(".home").click(function(){
    $('.info').css("display", "none")
})