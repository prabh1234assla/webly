const buttons = 20
const commands = ['c', "()", '%', '÷', 
'7', '8', '9', 'x',
'4', '5', '6', '-', "del",
'1', '2', '3', '+',
"+/-", '0', '.', '=']
const classesForCommands = ["clear cmdMain", "brackets cmd", "percent cmd", "division cmd",
"seven num", "eight num", "nine num", "multiply cmd",
"four num", "five num", "six num", "minus cmd", "delete cmdMain",
"one num", "two num", "three num", "plus cmd",
"signChange cmd", "zero num", "decimal cmd", "equal cmd"]

for(let i=0; i<=buttons; ++i)
    $("._buttonsContainer").append($("<div></div>").prop("class", classesForCommands[i].concat(" button")).text(commands[i]))