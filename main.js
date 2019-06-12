alert("Корреляционно-регрессионный анализ.");



buttonSet.addEventListener("click", set);
buttonShow.addEventListener("click", show);
buttonClear.addEventListener("click", clear);
buttonToCreateNewTables.addEventListener("click",  createTableX);
buttonToCreateNewTables.addEventListener("click",  createTableY);

function show() {
	

	var res = "";
	for (let i = 0; i < ceilsV.length; i++) {
		res += ceilsV[i].value + ", ";
	}
	alert("V: "+ res);

	var res = "";
	for (let i = 0; i < ceilsX.length; i++) {
		res += ceilsX[i].value + ", ";
	}
	alert("X: "+ res);

	var res = "";
	for (let i = 0; i < ceilsY.length; i++) {
		res += ceilsY[i].value + ", ";
	}
	alert("Y: " + res);
}

function clear() {
	
	
	table.innerHTML = "";
	tableY.innerHTML = ""

}

function set() {


	clear();


	


	

	var rows = +inputCountRows.value;
	var columns = +inputCountColumns.value;


	absTable.innerHTML.display = "block";
		
		frame.style.display = "table";
		mainTable.style.display = "table";
		buttonToCreateNewTables.style.display = "block";

		table.innerHTML = buildRowX(columns) + buildTable(rows, columns);


		tableY.innerHTML += buildColumnY(rows);
}