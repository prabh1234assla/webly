import ChangePoints from "./ChangePoints.js"

// oneMoment function is returning a promise to us!
  
function oneMoment() {
    return new Promise(resolve => setTimeout(resolve));
}


$('.message').text("loading...")

// setTimeout(() => {
//     initialGraph()
// }, 1)

// plots the graph for each different case...


// timeElapsed = new Date().getTime() - timeElapsed + 8000

// setTimeout(()=>{
//     $('.message').text("")
// }, timeElapsed)

    // return points
// }

$('.submit').click(function(event){
    $('.choices').css({'display': 'none'})
    $('.message').text("loading...")
        return setTimeout(() => {
        ChangePoints()
    }, 1)
})