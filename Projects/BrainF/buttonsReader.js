import {commasArray} from './brainfReader.js'

let inputString = ''

$('.button').click(function(event){

    if($(this).text() !== 'c' && $(this).text() !== '🗑'){

        if($(this).text() === '◃')
            inputString = $('.headContainer').text() + '<'

        else if($(this).text() === '▹')
            inputString = $('.headContainer').text() + '>'

        else
            inputString = $('.headContainer').text() + $(this).text()
    }

    else if($(this).text() === '🗑'){        

        if($('.headContainer').text()[$('.headContainer').text().length-1] === ',')
            commasArray.pop()

    inputString = inputString.slice(0, inputString.length-1)

    }

    else
        inputString = inputString.slice(0, 0)

    return $('.headContainer').html(inputString)
})