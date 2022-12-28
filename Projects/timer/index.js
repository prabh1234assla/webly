let secdegree = 6, minutedegree = 6, idMINS = null, idSECONDS = null, clock_is_off = true, clock_is_paused = false, elapsedSeconds = 0, elapsedMinutes = 0

const clockON = () => {
    clock_is_off = false

    $('#seconds').css("transform", `rotate(${secdegree}deg)`)

    const _minutesRunning = () => {
        $('#minutes').css("transform", `rotate(${minutedegree}deg)`)
        minutedegree = (minutedegree+6)%360
        ++elapsedMinutes

        console.log(elapsedMinutes)

        $('.info').html(elapsedMinutes.toString().concat("::").concat(elapsedSeconds.toString()))
    }
    
    const _secondsRunning = () => {
        $('#seconds').css("transform", `rotate(${secdegree}deg)`)
        secdegree = (secdegree+6)%360
        elapsedSeconds = (elapsedSeconds+1)%60

        console.log(elapsedSeconds)

        $('.info').html(elapsedMinutes.toString().concat("::").concat(elapsedSeconds.toString()))
    }

    if(!idMINS){
        idMINS = setInterval(function(){
            _minutesRunning()
        }, 60000)
    }

    if(!idSECONDS){
        idSECONDS = setInterval(function(){
            _secondsRunning()
        }, 1000)
    }
}

const clockOFF = () => {
    clock_is_off = true

    $('#minutes').css("transform", "rotate(0deg)")

    if(idMINS){
        clearInterval(idMINS)
        idMINS = null
    }

    $('#seconds').css("transform", "rotate(0deg)")

    if(idSECONDS){
        clearInterval(idSECONDS)
        idSECONDS = null
    }

    secdegree = 6
    minutedegree = 6
    elapsedSeconds = 0
    elapsedMinutes = 0
}

const clockPAUSE = () => {
    clock_is_paused = true

    if(idMINS){
        clearInterval(idMINS)
        idMINS = null
    }

    if(idSECONDS){
        clearInterval(idSECONDS)
        idSECONDS = null
    }

}

const clockRESUME = () => {
    clock_is_paused = false

        clockON()
}

$('#play').click(function(event){

    if(clock_is_off)
        clockON()
})

$('#pause').click(function(event){

    if(!clock_is_paused)
        clockPAUSE()
})

$('#resume').click(function(event){

    if(clock_is_paused)
        clockRESUME()
})

$('#stop').click(function(event){

    if(!clock_is_off)
        clockOFF()

    $('.info').html("...click on play")
})