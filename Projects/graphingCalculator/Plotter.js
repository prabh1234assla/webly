import {a as rangeMultiplier, b as domainMultiplier, chosenFn as fn, pointSize, stepSize, pointsNumber} from './MenuDealer.js'

let bgColors = ['rgb(186, 74, 0, 0.6)', 'rgb(29, 131, 72, 0.6)', 'rgb(33, 97, 140, 0.6)', 'rgb(125, 60, 152, 0.6)', 'rgb(236, 112, 99, 0.6)', 'rgb(241, 196, 15, 0.6)', 'rgb(86, 101, 115, 0.6)', 'rgb(230, 176, 170, 0.6)']

function whichFn(x){
    let y = 0

    switch(fn){

        // trignometric cases ~

        case 'sin' :
            y = -rangeMultiplier * Math.sin( domainMultiplier * x)
            break
 
        case 'cos' :
            y = -rangeMultiplier * Math.cos( domainMultiplier * x)
            break
        
        case 'tan' :
            y = -rangeMultiplier * Math.tan( domainMultiplier * x)
            break

        case 'cosec':
            y = -rangeMultiplier * (1 / (Math.sin( domainMultiplier * x)))
            break
 
        case 'sec' :
            y = -rangeMultiplier * (1 / (Math.cos( domainMultiplier * x)))
            break
        
        case 'cot' :
            y = -rangeMultiplier * (1 / (Math.tan( domainMultiplier * x)))
            break

        // hyperbolic cases ~

        case 'sinh' :
            y = -rangeMultiplier * Math.sinh( domainMultiplier * x)
            break
    
        case 'cosh' :
            y = -rangeMultiplier * Math.cosh( domainMultiplier * x)
            break
        
        case 'tanh' :
            y = -rangeMultiplier * Math.tanh( domainMultiplier * x)
            break

        case 'cosech':
            y = -rangeMultiplier * (1 / (Math.sinh( domainMultiplier * x)))
            break
    
        case 'sech' :
            y = -rangeMultiplier * (1 / (Math.cosh( domainMultiplier * x)))
            break
        
        case 'coth' :
            y = -rangeMultiplier * (1 / (Math.tanh( domainMultiplier * x)))
            break

        // inverse trignometric cases ~

        case 'asin' :
            y = -rangeMultiplier * Math.asin( domainMultiplier * x)
            break
 
        case 'acos' :
            y = -rangeMultiplier * Math.acos( domainMultiplier * x)
            break
        
        case 'atan' :
            y = -rangeMultiplier * Math.atan(domainMultiplier * x)
            break

        case 'acosec':
            y = -rangeMultiplier * Math.asin( 1 / (domainMultiplier * x))
            break
 
        case 'asec' :
            y = -rangeMultiplier * Math.acos( 1 / (domainMultiplier * x))
            break
        
        case 'acot' :
            y = -rangeMultiplier * Math.atan( 1 / (domainMultiplier * x))
            break

        // other cases ~

        case 'floor':
            y = -rangeMultiplier * Math.floor(domainMultiplier * x)
            break

        case 'ceil':
            y = -rangeMultiplier * Math.ceil(domainMultiplier * x)
            break

        case 'exp':
            y = -rangeMultiplier * Math.exp(domainMultiplier * x)
            break

        case 'log':
            y = -rangeMultiplier * Math.log(domainMultiplier * x)
            break

        case 'square-root':
            y = -rangeMultiplier * Math.sqrt(domainMultiplier * x)
            break

        case 'cube-root':
            y = -rangeMultiplier * Math.cbrt(domainMultiplier * x)
            break

        case 'absolute':
            y = -rangeMultiplier * Math.abs(domainMultiplier * x)
            break
    }

    return y
}

// oneMoment function is returning a promise to us!
  
function oneMoment() {
    return new Promise(resolve => setTimeout(resolve));
}

// plots the graph for y = 0 for first time on LOADING...

var leftLapse = -300

async function initialGraph(){
    let x = leftLapse
    let y = 0
    let color = '\0'

    const iterationsPerChunk = 10000000

    let timeElapsed = new Date().getTime()
    
    for(let i=0; i<=pointsNumber; ++i){

        if(i && i % iterationsPerChunk === 0)
            await oneMoment()

        y = whichFn(x)
        color = bgColors[Math.floor( Math.random() * bgColors.length)]

        if(isNaN(y) == true)
            y = 0

        $('.graphContainer').
        append($('<div></div>').
        addClass('point').
        css({
            'z-index': i+1, 
            'left': `${x}px`, 
            'top':  `${y}px`,
            'backgroundColor': color,
            'height': `${pointSize}px`,
            'width': `${pointSize}px`,
            'margin-top': `${-1*pointSize}px`
        }))
        
        x += stepSize
    }

    timeElapsed = new Date().getTime() - timeElapsed + 8000

    setTimeout(()=>{
        $('.message').text("")
    }, timeElapsed)

    return $('.graphContainer')
}


$('.message').text("loading...")

setTimeout(() => {
    initialGraph()
}, 1)

// plots the graph for each different case...

async function changeGraph(){
    let x = leftLapse
    let y = 0
    let points = $('.point')
    const iterationsPerChunk = 10000000

    let timeElapsed = new Date().getTime()
    const totalMilliSeconds = pointsNumber*1

    for(let i=0; i<points.length; ++i){

        if(i && i % iterationsPerChunk === 0)
            await oneMoment()

        y = whichFn(x)

        if(isNaN(y) == true)
            y = 0
        
        points.
        eq(i).
        css({
        'left': `${x}px`, 
        'top':  `${y}px`,
        'height': `${pointSize}px`,
        'width': `${pointSize}px`,
        'margin-top': `${-1*pointSize}px`
    })
    
    x += stepSize
}

timeElapsed = new Date().getTime() - timeElapsed + 8000

setTimeout(()=>{
    $('.message').text("")
}, timeElapsed)

    return points
}

$('.submit').click(function(event){
    $('.choices').css({'display': 'none'})
    $('.message').text("loading...")
        return setTimeout(() => {
        changeGraph()
    }, 1)
})