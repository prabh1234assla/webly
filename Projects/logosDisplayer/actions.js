const columns = 39
const rows = 39

const colors = ['#7d6608', '#9a7d0a', '#b7950b', '#d4ac0d', '#f1c40f', '#f4d03f', '#f7dc6f']

for(let i=1; i<=columns*rows; ++i)
    $('.main').append($('<div><div/>').addClass('dot').css('backgroundColor', colors[Math.floor(Math.random()*7 +1) -1]))

function changeDotBgColor(){
    let individualDot = $('.dot')

    for(let i=0; i<columns*rows; ++i)
        individualDot.eq(i).css('backgroundColor', colors[Math.floor(Math.random()*7 +1) -1])

    return $('.dot')
}

changeDotBgColor()

window.setInterval(changeDotBgColor, 800)

const stepSize = 20

function alignSmallCubes(){
    let individualCube = $('.smallcube')

    for(let i=1; i<=individualCube.length/2; ++i)
        individualCube.eq(i-1).css({
            left: `-=${i*stepSize+15}vw`, 
            scale: `${0.5-i*0.1}`, 
            animation: `rotateCube 6s ease-in-out infinite`
        }).addClass("lefties")

    for(let i=individualCube.length/2+1; i<=individualCube.length; ++i)
        individualCube.eq(i-1).css({
            left: `+=${(i-individualCube.length/2)*stepSize+15}vw`, 
            scale: `${0.5-(i-individualCube.length/2)*0.1}`,
            animation: `rotateCube 6s ease-in-out infinite`
        }).addClass("righties")

    individualCube.eq(individualCube.length-1).css("left", "-=8.5vw")
}

alignSmallCubes()

function textAssigner(){
    let individualCubes = $('.smallcube')
    let toAdd = "OGOLARTS"

    for(let i=0; i<individualCubes.length; ++i)
        for(let j=0; j<individualCubes.eq(i).children().length; ++j)
            individualCubes.eq(i).children().eq(j).text(`${toAdd[i]}`)

    let individualSidesLefties = $('.lefties .downSide, .lefties .upSide, .righties .downSide, .righties .upSide')

    for(let i=0; i<individualSidesLefties.length; ++i)
        individualSidesLefties.eq(i).text("❦")

}

textAssigner()