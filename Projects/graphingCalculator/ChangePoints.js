import { leftLapse, stepSize, pointSize, pointsNumber, iterationsPerChunk } from './MenuDealer.js'
import value_of_y from './FunctionsOfChoice.js'

const bgColors = [
    "#baff64d9", 
    "#1d834899", 
    "#21618c99", 
    "#21618c99", 
    "#ec706399", 
    "#f1c40f99", 
    "#56657399", 
    "#e6b0aa99"
]

const generateSVGCircle = (radius, left, top, bg_color) => {
    const css = `left:${left}px; top:${top}px; margin-top:${-1*radius}px;`
    console.log(css)

    return `<svg class="point" viewBox="0 0 ${2*radius}px ${2*radius}px" style="${css}">
        <circle cx=${radius}px cy=${radius}px r=${radius}px fill=${bg_color}></circle>
    </svg>`
}

// function CreatePoints(stepSize, pointSize){
//     // let color = null
    
//     // let timeElapsed = new Date().getTime()
    
//     // for(let i=0; i<=pointsNumber; ++i){

//     //     if(i && i % iterationsPerChunk === 0)
//     //     await oneMoment()
    
//     let y = value_of_y(x)

//     if(isNaN(y))
//         return

//     let color = bgColors[Math.floor( Math.random() * bgColors.length)]

//     console.log(x, y)

//     // y = 0
//         // console.log(color)

//         $('.graphContainer').
//         append($(generateSVGCircle(pointSize, x, y, color)))
        
//     x += stepSize
//     // }
    
//     // timeElapsed = new Date().getTime() - timeElapsed + 8000
    
//     // setTimeout(()=>{
//     //     $('.message').text("")
//     // }, timeElapsed)
    
//     // return $('.graphContainer')
// }

function ChangePoints(){
    let x = leftLapse
    let y = 0
    let points = $('.point') || []
    
    // let timeElapsed = new Date().getTime()
    // const totalMilliSeconds = pointsNumber*1

    console.log(leftLapse, stepSize, pointSize,pointsNumber, iterationsPerChunk, points.length, pointsNumber)
    if(points.length >= pointsNumber)
        for(let i=0; i<pointsNumber; ++i){

            // if(i && i % iterationsPerChunk === 0)
            //     await oneMoment()

            y = value_of_y(x)

            if(isNaN(y))
                points.eq(i).hide()
            
            else{
                    console.log(points)
                points.eq(i)
                .attr('viewBox', `0 0 ${2*pointSize}px ${2*pointSize}px`)
                .css({ 'left': `${x}px`,
                'top':  `${y}px`,
                'margin-top': `${-1*pointSize}px`})
                .children().eq(0)
                .attr('cx', `${pointSize}px`)
                .attr('cy', `${pointSize}px`)
                .attr('r', `${pointSize}px`)
            }

        x += stepSize
        }

    if(points.length > pointsNumber)
        while(points.length != pointsNumber)
            points.eq(points.length-1).remove(),
            points = $('.point')

    if(points.length < pointsNumber){
        console.log('entered')
        while(points.length != pointsNumber){
            y = value_of_y(x)

            if(isNaN(y))
                return
        
            let color = bgColors[Math.floor( Math.random() * bgColors.length)]
        
            console.log(x, y)
        
            // y = 0
                // console.log(color)
        
            $('.graphContainer').
                append($(generateSVGCircle(pointSize, x, y, color)))
                
            x += stepSize
            points = $('.point')
        }
    }
}

export default ChangePoints