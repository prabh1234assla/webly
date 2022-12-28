export let chosenFn = 'cos'
export let a = 10
export let b = 0.1
export let pointSize = 1
export let stepSize = 0.4
export let pointsNumber = 1350

function submittingData(){
    a = parseFloat($('.a').val())

    b = parseFloat($('.b').val())

    pointSize = parseFloat($('.pointSize').val())

    stepSize = parseFloat($('.stepSize').val())

    pointsNumber = parseFloat($('.pointsNumber').val())

    return 0
}

$('.option').click(function(event){
    return chosenFn = $(this).prop('id')
})

$('.submit').click(function(event){
    return submittingData()
})