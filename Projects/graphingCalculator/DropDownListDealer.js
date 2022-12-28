let id = 0

// function that deals with Collapsing of items in the list

function collapseItems(marginTop, optionslist){
    const items = $(`.${optionslist}`)

        for(let i=items.length-1; i>=0; --i)
            items.eq(i).css({'margin-top': `${marginTop}px`, 'display': 'none'})

    return items
}

// function that deals with events triggered when clicking on '.select' button

function customizeItems(marginTop, optionslist){
    const items = $(`.${optionslist}`)

        for(let i=items.length-1; i>=0; --i){
            if(!marginTop)
                items.eq(i).css({'margin-top': `${marginTop}px`, 'display': 'block'})

            else
                items.eq(i).css({'margin-top': `${marginTop}px`})
        }

    if(marginTop){
        id = setTimeout(()=>{
            collapseItems(marginTop, optionslist)
        }, 200)
    }

    return items
}

// dealing with '.select' button

$('.select').click(function(event){
    clearTimeout(id)
    return customizeItems(0, $(this).prop('id'))
})

$('.select').dblclick(function(event){
    return customizeItems(-23, $(this).prop('id'))
})

// dealing with '.menu' button

$('.menu').click(function(event){
    return $('.choices').css({'display': 'grid'})
})

$('.menu').dblclick(function(event){
    return $('.choices').css({'display': 'none'})
})