let expression="";

function update()
{
	document.getElementById("display").innerHTML=expression;
}

function keyPress(keyValue) {
	expression+=keyValue;
	update();
}

function clearDisplay() {
	expression="";
	update();
}

function backspace() {
	expression=expression.substring(0,expression.length-1);
	update();
}

function result() {
	let num=eval(expression);
	document.getElementById("display").innerHTML=num;
}
