import { rangeMultiplier, domainMultiplier, chosenFn } from "./MenuDealer.js"

function value_of_y(x){
    let y = 0

    switch(chosenFn){

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

export default value_of_y