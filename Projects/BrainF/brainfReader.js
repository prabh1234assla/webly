export let commasArray = []
let outputWithoutCommaInvolvement = []

function output(syntax){
    let outputString = []
    let processing = [0]
    let position = 0
    let bracketsOpen = false
    let previousRightBracketPosition = -1
    let commasCount = 0
        
    const plus = '+'
    const minus = '-'
    const comma = ','
    const dot = '.'
    const leftArrow = '<'
    const rightArrow = '>'
    const leftBracket = ']'
    const rightBracket = '['
    const curlyHyphen = 126
  
for(let i=0; i<syntax.length; ++i){

    switch(syntax[i]){

        case plus :
            ++processing[position]
        break

        case minus :
            --processing[position]
        break

        case comma :
            if(commasCount < commasArray.length){

                if(processing[processing.length-1] === 0)
                processing[processing.length-1] = commasArray[commasCount].charCodeAt(0)
                
                else{
                processing.push(commasArray[commasCount].charCodeAt(0))
                ++position
            }
            }

            else{

                if(processing[processing.length-1] === 0)
                    processing[processing.length-1] = curlyHyphen

                else{
                    processing.push(curlyHyphen)
                    ++position
            }
            }
                
            ++commasCount
        break

        case dot :
            outputString.push(String.fromCharCode(processing[position]))
        break

        case leftArrow :
            if(position)
                --position
        break

        case rightArrow :
            if(position === processing.length-1)
                processing.push(0)

                ++position
        break

        case rightBracket :
            bracketsOpen = true
            previousRightBracketPosition = i
        break

        case leftBracket :
            if( bracketsOpen )
                if( !processing[position] ){
                    !bracketsOpen
                    previousRightBracketPosition = null
                }

                else
                    i = previousRightBracketPosition
                    break
                    
            }
        }

    return outputString
}  
                                
$("body").on('DOMSubtreeModified', ".headContainer", function(event){
    
    outputWithoutCommaInvolvement = output($('.headContainer').text())

    if(outputWithoutCommaInvolvement[outputWithoutCommaInvolvement.length-1] === '~')
        $('.footContainer').html(outputWithoutCommaInvolvement.join('').slice(0, outputWithoutCommaInvolvement.length))        

    else
        $('.footContainer').html(outputWithoutCommaInvolvement.join(''))
 
    return outputWithoutCommaInvolvement
})

$(".commaButton").click(() => {

    $('.alertContainer').css("display", "flex")
    $('.mainContainer').css("pointerEvents", "none")
    
})

$('button').click(function(){
    commasArray.push($('input').val())
    let index = 0

    for(let i=0; i<outputWithoutCommaInvolvement.length; ++i){

        if(outputWithoutCommaInvolvement[i] === '~'){
            outputWithoutCommaInvolvement[i] = commasArray[index]
            ++index
        }
    }
    
    $('.alertContainer').css("display", "none")
    $('.mainContainer').css("pointerEvents", "auto")

    $('.footContainer').html(outputWithoutCommaInvolvement.join(''))
    return outputWithoutCommaInvolvement
})