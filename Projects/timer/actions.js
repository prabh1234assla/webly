var clockIsOff = true, clockIsPaused = false

function moveHa

function clockOn(){
    let reference = Date.now()

}

$('#play').click(function(event){
    if(clockIsOff){
        clockOn()
        clockIsOff = !clockIsOff
    }
})

$('#pause').click(function(event){
    if(!clockIsPaused){
        clockPause()
        clockIsPaused = !clockIsPaused
    }
})

$('#resume').click(function(event){
    if(clockIsPaused){
        clockResume()
        clockIsPaused = !clockIsPaused
    }
})

$('#stop').click(function(event){
    if(!clockIsOff){
        clockOff()
        clockIsOff = !clockIsOff
    }

    $('.info').html("...click on play")
})