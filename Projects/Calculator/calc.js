
function solvingTheStack(postfixStack){

	let solutionStack = [].concat(postfixStack), outputStack = [];

	while(solutionStack.length != 0){
	if(!isNaN(parseInt(solutionStack[0]))){

		let isfloat = false;

		for(let i of solutionStack[0])
			if(i == '.'){
				isfloat = true;
				break;
			}

		if(isfloat)
			outputStack.push(parseFloat(solutionStack.shift()));	

		else
			outputStack.push(parseInt(solutionStack.shift()));
	}

	if(solutionStack[0] == '+' || solutionStack[0] == '×' || solutionStack[0] == '—' || solutionStack[0] == '÷' || solutionStack[0] == '^'){

		let input1 = 0, input2 = 0, output = 0;

		if(solutionStack[0] == '+'){
			input2 = outputStack.pop();
			input1 = outputStack.pop();
			output = input1 + input2;
			outputStack.push(output);
		}

		if(solutionStack[0] == '—'){
			input2 = outputStack.pop();
			input1 = outputStack.pop();
			output = input1 - input2;
			outputStack.push(output);
		}

		if(solutionStack[0] == '×'){
			input2 = outputStack.pop();
			input1 = outputStack.pop();
			output = input1 * input2;
			outputStack.push(output);
		}

		if(solutionStack[0] == '÷'){
			input2 = outputStack.pop();
			input1 = outputStack.pop();
			output = input1 / input2;
			outputStack.push(output);
		}

		if(solutionStack[0] == '^'){
			input2 = outputStack.pop();
			input1 = outputStack.pop();
			output = Math.pow(input1,input2);
			outputStack.push(output);
		} 

		solutionStack.shift();
	}

}


	return outputStack;
}

	function precedence(operator){

		if(operator == '^')
			return 3;

		if(operator == '÷' || operator == '×')
			return 2;

		if(operator == '+' || operator == '—')
			return 1;

		else
			return 4;
	}

let rprStack = [], operatorStack = [], operatorClickLastTime = true, infix = [], calculationDone = false;

	operatorStack.push('(');

$('.button').click(function(event){

			infix.push($(this).text());

		if($(this).hasClass('operand')){


			if(operatorClickLastTime){
				rprStack.push($(this).text());
				operatorClickLastTime = false;
			}

			else{
				rprStack.push(rprStack.pop().concat($(this).text()));

			infix.pop(); infix.pop();
				infix.push(rprStack[rprStack.length-1]);
			}

		}

		if($(this).hasClass('operator') && !$(this).hasClass('backspace')){

			operatorClickLastTime = true;

				if($(this).text() == '+' || $(this).text() == '×' || $(this).text() == '—' || $(this).text() == '÷' || $(this).text() == '^'){

					for(let i=operatorStack.length-1; i>=0; --i){

						if(precedence(operatorStack[i]) >= precedence($(this).text())){
							if(operatorStack[i] == '(')
								break;

							console.log(precedence(operatorStack[i]), precedence($(this).text()));
							let element = operatorStack.pop()
							rprStack.push(element);


						}

						else break;
					}

					operatorStack.push($(this).text());
				}


		if($(this).text() == '(')
			operatorStack.push($(this).text());


		if($(this).text() == ')' || $(this).text() == '='){

				for(let i=operatorStack.length-1; i>=0; --i){

						if(operatorStack[i] != '(')
							rprStack.push(operatorStack.pop());

						else{
							operatorStack.pop();
							break;}


				if($(this).text() == '='){
						solvingTheStack(rprStack);
						calculationDone = !calculationDone;
				}

		}}

		if($(this).text() == '±' || $(this).text() == 'C'){
			console.log("ffff");

					if($(this).text() == '±'){
						infix.pop(); infix.pop();

						let isfloat = false, element = 1;

						for(let i of rprStack[rprStack.length-1])
							if(i == '.'){
								isfloat = true;
								break;
							}

						if(isfloat)
							element = parseFloat(rprStack.pop());

						else
							element = parseInt(rprStack.pop());

						element*=(-1);

						rprStack.push(element.toString());
							infix.push(rprStack[rprStack.length-1]);

						operatorClickLastTime = false;

					}

					if($(this).text() == 'C'){

						while(infix.length != 0)
							infix.pop();

						let j = operatorStack.length-1;
							for(let i=1; i<=j; ++i)
								operatorStack.pop();

						j = rprStack.length;
							for(let i=1; i<=j; ++i)
								rprStack.pop();
					}
			}


					if($(this).text() == '%'){
						infix.pop(); 			infix.pop();

						let isfloat = false;

						for(let i of rprStack[rprStack.length-1])
							if(i == '.'){
								isfloat = true;
								break;
							}

						if(isfloat){
							let element = parseFloat(rprStack.pop()) * 0.01;

							rprStack.push(element.toString());
						}

						else{
							let element = parseInt(rprStack.pop()) * 0.01;

							rprStack.push(element.toString());
						}
							infix.push(rprStack[rprStack.length-1]);
					}


					if($(this).text() == '.'){
						infix.pop(); 			infix.pop();

						rprStack.push(rprStack.pop().concat('.'));

						operatorClickLastTime = false;
						infix.push(rprStack[rprStack.length-1]);
		}

	}

		if($(this).hasClass('operator') && $(this).hasClass('backspace')){

				infix.pop();

						if(!operatorClickLastTime){
							rprStack.pop();
						}

						else{
							operatorStack.pop();

							for(let i=rprStack.length-1; i>=0; --i){
								
								if(isNaN(parseInt(rprStack[i])))
									operatorStack.push(rprStack.pop());

								else break;
						}
					}

					operatorClickLastTime = !operatorClickLastTime;
			}

	let outputStack = solvingTheStack(rprStack);
	console.log('444', outputStack, calculationDone);

	let inputString = infix.join(" ");

	$('.input').text(inputString).css("font", "2em monospace");

	let outputScript;
	let outlet = outputStack.join(" ");

	if(!calculationDone)
	outputScript = 'output in progress... => '.concat(outlet);

	else
	outputScript = 'finaloutput... => '.concat(outlet);
	
	$('.output').text(outputScript).css("font", "2em monospace");

	console.log('rpr --->', rprStack);
});
