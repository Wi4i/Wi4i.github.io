var Yk = "<tr><td>Yk</td>" ;
var Pk = "<tr><td>Pk</td>"
var Xk = "<tr><td>Xk</td>";


var ceilsV = document.getElementsByClassName("ceilV");
var ceilsX = document.getElementsByClassName("ceilX");
var ceilsY = document.getElementsByClassName("ceilY");



function buildColumnY(count) {
	var c = "<td><input class='ceil-disabled' type='text' disabled ></td>";
	for (let i = 0; i < count; i++) {
		c += buildRow("ceilY", 1);
	}
	return c;
}

function buildRowX(count) {
	return buildRow("ceilX", count);
}

function buildTable(countRows, countColumns) {
	var t = "";
	for (let i = 0; i < countRows; i++) 
		t += buildRow("ceilV", countColumns);
	return t;
}

function buildRow(className, count) {
	var r = "<tr>"
	for (let i = 0; i < count; i++)
		r += buildCeil(className);
	r += "</tr>";
	return r;
}

function buildCeil(className) {
	return "<td> <input class='ceil " + className + "' type='number'> </td>";
}











