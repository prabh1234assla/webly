let chosenFn = 0, 
rangeMultiplier = 0,
domainMultiplier = 0,  
leftLapse = 0,
stepSize = 0,
pointSize = 0,
pointsNumber = 0,
iterationsPerChunk = 0

function submittingData(){
    rangeMultiplier = parseFloat($('.rangeMultiplier').val())

    domainMultiplier = parseFloat($('.domainMultiplier').val())
    
    leftLapse = parseFloat($('.leftLapse').val())
    
    stepSize = parseFloat($('.stepSize').val())
    
    pointSize = parseFloat($('.pointSize').val())
    
    pointsNumber = parseFloat($('.pointsNumber').val())
    
    iterationsPerChunk = parseFloat($('.iterationsPerChunk').val())

    return 0
}

$('.option').click(function(event){
    return chosenFn = $(this).prop('id')
})

$('.submit').click(function(event){
    return submittingData()
})

export {chosenFn,
    rangeMultiplier,
    domainMultiplier,  
    leftLapse,
    stepSize,
    pointSize,
    pointsNumber,
    iterationsPerChunk}