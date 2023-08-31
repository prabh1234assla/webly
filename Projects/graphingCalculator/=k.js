import {
    chosenFn,
    rangeMultiplier,
    domainMultiplier,  
    leftLapse,
    stepSize,
    pointSize,
    pointsNumber,
    iterationsPerChunk
} from './MenuDealer.js'

// let _global_points_number = 0

// let bgColors = [
//     "#baff64d9", 
//     "#1d834899", 
//     "#21618c99", 
//     "#21618c99", 
//     "#ec706399", 
//     "#f1c40f99", 
//     "#56657399", 
//     "#e6b0aa99"
// ]

// function whichFn(x){
//     let y = 0

//     switch(chosenFn){

//         // trignometric cases ~

//         case 'sin' :
//             y = -rangeMultiplier * Math.sin( domainMultiplier * x)
//             break
 
//         case 'cos' :
//             y = -rangeMultiplier * Math.cos( domainMultiplier * x)
//             break
        
//         case 'tan' :
//             y = -rangeMultiplier * Math.tan( domainMultiplier * x)
//             break

//         case 'cosec':
//             y = -rangeMultiplier * (1 / (Math.sin( domainMultiplier * x)))
//             break
 
//         case 'sec' :
//             y = -rangeMultiplier * (1 / (Math.cos( domainMultiplier * x)))
//             break
        
//         case 'cot' :
//             y = -rangeMultiplier * (1 / (Math.tan( domainMultiplier * x)))
//             break

//         // hyperbolic cases ~

//         case 'sinh' :
//             y = -rangeMultiplier * Math.sinh( domainMultiplier * x)
//             break
    
//         case 'cosh' :
//             y = -rangeMultiplier * Math.cosh( domainMultiplier * x)
//             break
        
//         case 'tanh' :
//             y = -rangeMultiplier * Math.tanh( domainMultiplier * x)
//             break

//         case 'cosech':
//             y = -rangeMultiplier * (1 / (Math.sinh( domainMultiplier * x)))
//             break
    
//         case 'sech' :
//             y = -rangeMultiplier * (1 / (Math.cosh( domainMultiplier * x)))
//             break
        
//         case 'coth' :
//             y = -rangeMultiplier * (1 / (Math.tanh( domainMultiplier * x)))
//             break

//         // inverse trignometric cases ~

//         case 'asin' :
//             y = -rangeMultiplier * Math.asin( domainMultiplier * x)
//             break
 
//         case 'acos' :
//             y = -rangeMultiplier * Math.acos( domainMultiplier * x)
//             break
        
//         case 'atan' :
//             y = -rangeMultiplier * Math.atan(domainMultiplier * x)
//             break

//         case 'acosec':
//             y = -rangeMultiplier * Math.asin( 1 / (domainMultiplier * x))
//             break
 
//         case 'asec' :
//             y = -rangeMultiplier * Math.acos( 1 / (domainMultiplier * x))
//             break
        
//         case 'acot' :
//             y = -rangeMultiplier * Math.atan( 1 / (domainMultiplier * x))
//             break

//         // other cases ~

//         case 'floor':
//             y = -rangeMultiplier * Math.floor(domainMultiplier * x)
//             break

//         case 'ceil':
//             y = -rangeMultiplier * Math.ceil(domainMultiplier * x)
//             break

//         case 'exp':
//             y = -rangeMultiplier * Math.exp(domainMultiplier * x)
//             break

//         case 'log':
//             y = -rangeMultiplier * Math.log(domainMultiplier * x)
//             break

//         case 'square-root':
//             y = -rangeMultiplier * Math.sqrt(domainMultiplier * x)
//             break

//         case 'cube-root':
//             y = -rangeMultiplier * Math.cbrt(domainMultiplier * x)
//             break

//         case 'absolute':
//             y = -rangeMultiplier * Math.abs(domainMultiplier * x)
//             break
//     }

//     return y
// }

// // oneMoment function is returning a promise to us!
  
// function oneMoment() {
//     return new Promise(resolve => setTimeout(resolve));
// }

// // plots the graph for y = 0 for first time on LOADING...

// const generateSVGCircle = (r, index, left, top, bg_color) => {
//     const css = {
//         'z-index': index+1, 
//         'left': `${left}px`, 
//         'top':  `${top}px`,
//         'height': `${r}px`,
//         'width': `${r}px`,
//         'margin-top': `${-1*r}px`
//     }
//     return `<svg class="point" viewBox="0 0 ${2*r} ${2*r}" style=${css}>
//         <circle cx=${r} cy=${r} r=${r} fill=${bg_color}></circle>
//     </svg>`
// }

// async function generatePoints(){
//     let x = leftLapse
//     let y = 0
//     let color = '\0'
    
//     let timeElapsed = new Date().getTime()
    
//     for(let i=0; i<=pointsNumber; ++i){

//         if(i && i % iterationsPerChunk === 0)
//         await oneMoment()
    
//     y = whichFn(x)
//     color = bgColors[Math.floor( Math.random() * bgColors.length)]
    
//     if(isNaN(y) == true)
//     y = 0
//         console.log(color)
//         $('.graphContainer').
//         append($(generateSVGCircle(pointSize, i, x, y, color)))
        
//         x += stepSize
//     }
    
//     timeElapsed = new Date().getTime() - timeElapsed + 8000
    
//     setTimeout(()=>{
//         $('.message').text("")
//     }, timeElapsed)
    
//     return $('.graphContainer')
// }


// $('.message').text("loading...")

// setTimeout(() => {
//     initialGraph()
// }, 1)

// // plots the graph for each different case...

// async function changeGraph(){
//     console.log(rangeMultiplier, domainMultiplier, chosenFn, pointSize, stepSize, pointsNumber, chosenFn)
//     let x = leftLapse
//     let y = 0
//     let points = $('.point')
//     console.log(points)
    
//     let timeElapsed = new Date().getTime()
//     const totalMilliSeconds = pointsNumber*1
    
//     for(let i=0; i<points.length; ++i){

//         if(i && i % iterationsPerChunk === 0)
//             await oneMoment()

//         y = whichFn(x)

//         if(isNaN(y) == true)
//             y = 0
        
//         points.
//         eq(i).
//         css({
//         'left': `${x}px`, 
//         'top':  `${y}px`,
//         'height': `${pointSize}px`,
//         'width': `${pointSize}px`,
//         'margin-top': `${-1*pointSize}px`
//     })
    
//     x += stepSize
// }

// timeElapsed = new Date().getTime() - timeElapsed + 8000

// setTimeout(()=>{
//     $('.message').text("")
// }, timeElapsed)

//     return points
// }

// $('.submit').click(function(event){
//     $('.choices').css({'display': 'none'})
//     $('.message').text("loading...")
//         return setTimeout(() => {
//         changeGraph()
//     }, 1)
// })