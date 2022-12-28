let PE = [],
Stack = ['('], 
rightBracketEncounter = 0,
dotInstance = 0,
inputString = ''

const precendence = {
    '-' : 1,
    '+' : 1,
    'x' : 2,
    '÷' : 2
}


const __CALCULATION = (PE) => {
    let solutionStack = []
    // console.log(PE, 'kjfjf')
    while(PE.length){

        if(PE[0] === 'x'){
            // console.log('multiply')
            solutionStack.push(solutionStack.pop() * solutionStack.pop())
            PE.shift()
        }

        else if(PE[0] === '+'){
            // console.log('addition')
            solutionStack.push(solutionStack.pop() + solutionStack.pop())
            PE.shift()
        }

        else if(PE[0] === '-'){
            // console.log('minus')
            solutionStack.push(solutionStack.pop() - solutionStack.pop())
            PE.shift()
        }

        else if(PE[0] === '÷'){
            // console.log('division')
            solutionStack.push(solutionStack.pop() / solutionStack.pop())
            PE.shift()
        }

        else{
            // console.log('number')
            solutionStack.push(PE.shift())
        }

        // console.log(solutionStack, "--- solutionstack", PE, "--- PE")
    }


    return solutionStack[0]
}

const __cmdMain = (n) => {
    // console.log('__cmdMain')

return PE;
}


const __num = (n) => {
    // console.log('num')

    // console.log(n)
    PE.push(n)

return PE
}


const __cmd = (n) => {
    // console.log('cmd')

    if(n === '-' || n === '+' || n === 'x' || n === '÷'){
        while(
        (precendence[n] <= precendence[Stack[Stack.length-1]]) && 
        (Stack[Stack.length-1] === '-') &&
        (Stack[Stack.length-1] === '+') &&
        (Stack[Stack.length-1] === 'x') &&
        (Stack[Stack.length-1] === '÷')
        ){
            PE.push(Stack.pop())
        }

        Stack.push(n)
    }

    if(n === "+/-" || n === '%' || n === '.'){

        if(n === "+/-"){
            __cmd('x')
            __num(-1)
        }

        if(n === '%'){
            __cmd('x')
            __num(0.1)
        }

        // if(n === '.'){
        //     dotInstance
        //     __cmd()
        // }
    }

    if(n === "()"){
        console.log('fjjfjf', rightBracketEncounter)
        ++rightBracketEncounter

        if(rightBracketEncounter){
            while(Stack[Stack.length-1] !== '('){
                PE.push(Stack.pop())
            }

            if(Stack.length !== 1)
                Stack.pop()
        
        --rightBracketEncounter
        }

        else{
            Stack.push('(')
            ++rightBracketEncounter
        }
    }

    if(n === '='){            
        
        while(Stack[Stack.length-1] !== '('){
            PE.push(Stack.pop())
        }

        // console.log(__CALCULATION(PE).toString())
        $('._inputScreen').text(__CALCULATION(PE).toString())
    }

return PE
}


$(".button").click(function(event){

    $('._inputScreen').append($(this).text().concat(' '))
    // console.log('dddd', $(this).attr("class").split(' ')[1])

    switch($(this).attr("class").split(' ')[1]){

        case "num" :
            __num(parseInt($(this).text()))
            break

        case "cmd" :
            __cmd($(this).text())
            break

        case "cmdMain" :
            __cmdMain($(this).text())
            break
    }

    console.log(PE, Stack)

})