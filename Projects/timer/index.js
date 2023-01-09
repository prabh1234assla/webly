const Play = document.getElementById("play"), 
Pause = document.getElementById("pause"),
Stop = document.getElementById("stop"),
Secs = document.getElementById("seconds"),
Mins = document.getElementById("minutes"),
Info = document.getElementById("info")

let globalTime = 0, pauseTime = 0, buffer = 0, id = 0, previousClick = null

Play.addEventListener("click", function(event){
    
    if(Play.textContent == "Play"){
        if(previousClick !== "PLAY"){
            globalTime = new Date()
            ChangeInfo(0)
            changeClockAnimation(0)

            previousClick = "PLAY"
        }
    }

    else{
        if(previousClick !== "RESUME"){
            Play.textContent = "Play"
            ChangeInfo(2)
            changeClockAnimation(0)

            previousClick = "RESUME"
        }
    }
}, false)

Pause.addEventListener("click", function(event){

    if(previousClick !== "PAUSE"){
        pauseTime = new Date()
        Play.textContent = "Resume"
    
        ChangeInfo(1)
        changeClockAnimation(1)

        previousClick = "PAUSE"
    }
}, false)

Stop.addEventListener("click", function(event){

    if(previousClick !== "STOP"){
        globalTime = 0
        pauseTime = 0
    
        ChangeInfo(3)
        changeClockAnimation(2)

        previousClick = "STOP"
    }
}, false)

function changeClockAnimation( response ){
    if(!response){
        Secs.style.animation = "secondsRotate 60s steps(60, end) infinite"
        Mins.style.animation = "minutesRotate 3600s steps(60, end) infinite"
        Secs.style.animationPlayState = "running"
        Mins.style.animationPlayState = "running"
    }

    else if(response == 1){
        Secs.style.animationPlayState = "paused"
        Mins.style.animationPlayState = "paused"
    }

    else{
        if(Play.textContent != "Play")
            Play.textContent = "Play"
            
        Secs.style.animation = ""
        Secs.style.rotate = 0
        Mins.style.animation = ""
        Mins.style.rotate = 0
    }
}

function ChangeInfo(response){
    let temp = null, S = null

    if(!response)
        id = setInterval(()=>{
            temp = new Date()
                S = Math.floor((temp - globalTime - buffer)/1000)
                Info.textContent = S%60 + "secs ::" + parseInt(S/60) + "mins"
        }, 100)

    else if(response == 1)
        clearInterval(id)
    
    else if(response == 2){
        temp = new Date()
        buffer += temp - pauseTime

        ChangeInfo(0)
    }

    else{
        Info.textContent = "...click on play"
        clearInterval(id)
        
        buffer = 0
    }
}