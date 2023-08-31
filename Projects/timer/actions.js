const Play = document.getElementById("play"), 
Pause = document.getElementById("pause"),
Stop = document.getElementById("stop"),
Secs = document.getElementById("seconds"),
Mins = document.getElementById("minutes"),
Info = document.getElementById("info"),
Lap = document.getElementById("lap")

let StartPoint = 0, 
play_if_valid = true, 
pause_if_valid = false, 
stop_if_valid = false, 
StartOfPausePoint = 0, 
resume_if_valid = false, 
PausePeriodToSubtractFromStartPoint = 0,
interval_id = 0,
lap_if_valid = false,
lap = 0,
prev_lap_time = 0

Play.addEventListener("click", function(event){
    if(resume_if_valid){
        PausePeriodToSubtractFromStartPoint += (new Date()) - StartOfPausePoint
        StartOfPausePoint = 0

        Play.textContent = "Lap"
        resume_if_valid = false
        pause_if_valid = true
        lap_if_valid = true

        changeClockAnimation(1)
        ChangeInfo(0)
    }
    
    else if(play_if_valid){
        StartPoint = new Date()

        play_if_valid = false
        pause_if_valid = true
        stop_if_valid = true
        lap_if_valid = true
        Play.textContent = "Lap"

        changeClockAnimation(0)
        ChangeInfo(0)
    }

    else if(lap_if_valid){
        if(!lap)
            addHeader(['Lap', 'Lap times', 'Overall times'])

        lap++

        let seconds = Math.floor(((new Date()) - StartPoint - PausePeriodToSubtractFromStartPoint)/1000)
        addItemToLap(lap, seconds - prev_lap_time, seconds)

        prev_lap_time = seconds
    }

}, false)

Pause.addEventListener("click", function(event){

    if(pause_if_valid){
        StartOfPausePoint = new Date()

        pause_if_valid = false
        resume_if_valid = true
        lap_if_valid = false
        Play.textContent = "Resume"

        changeClockAnimation(2)
        ChangeInfo(1)
    }

}, false)

Stop.addEventListener("click", function(event){

    if(stop_if_valid){
        Play.textContent = "Play"

        StartPoint = 0
        StartOfPausePoint = 0
        PausePeriodToSubtractFromStartPoint = 0

        play_if_valid = true 
        pause_if_valid = false
        stop_if_valid = false
        resume_if_valid = false
        lap_if_valid = false
        lap = 0
        prev_lap_time = 0

        changeClockAnimation(3)
        ChangeInfo(2)

        while(document.getElementsByTagName("tr").length)
            document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length-1].remove()
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
        Secs.style.animationPlayState = "running"
        Mins.style.animationPlayState = "running"
    }

    else if(response == 2){
        Secs.style.animationPlayState = "paused"
        Mins.style.animationPlayState = "paused"
    }

    else{
        Secs.style.animation = ""
        Secs.style.rotate = 0
        Mins.style.animation = ""
        Mins.style.rotate = 0
    }
}

function ChangeInfo(response){
    let seconds = 0

    if(!response)
        interval_id = setInterval(()=>{
            temp = 
                seconds = Math.floor(((new Date()) - StartPoint - PausePeriodToSubtractFromStartPoint)/1000)
                Info.textContent = parseInt(seconds/60) + " mins :: " + seconds%60 + " secs "
        }, 100)

    else if(response == 1)
        clearInterval(interval_id)

    else{
        Info.textContent = "...click on play"
        clearInterval(interval_id)
        
        seconds = 0
    }
}

function addItemToLap(lap, lap_times, overall_time){
    const table_row = document.createElement("tr")

    for(let i=0; i<3; ++i)
        table_row.appendChild(document.createElement("td"))

    table_row.childNodes[0].textContent = lap
    table_row.childNodes[1].textContent = parseInt(lap_times/60) + " :: " + lap_times%60 
    table_row.childNodes[2].textContent = parseInt(overall_time/60) + " :: " + overall_time%60 

    Lap.appendChild(table_row)
}

function addHeader([...headers]){
    const table_row = document.createElement("tr")

    for(let i=0; i<3; ++i)
        table_row.appendChild(document.createElement("th"))

    table_row.childNodes[0].textContent = headers[0]
    table_row.childNodes[1].textContent = headers[1]
    table_row.childNodes[2].textContent = headers[2]

    Lap.appendChild(table_row)
}