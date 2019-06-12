function clearCreatedTableX() {
	innerCreatedTableXi.innerHTML = "";
	Xi = "<tr><td>Xi</td>";
	Pi = "<tr><td>Pi</td>";

}

function createTableX() {
	
	
	clearCreatedTableX();

	createdTableXi.style.display = "table";
	var tmp;

	
	for (let i = 0; i < ceilsX.length; i++) {
		tmp = ceilsX[i].value;


		Xi += "<td class ='ceilY3'>";
		Xi += tmp;
		Xi += "</td>";
	}
	Xi += "</tr>";
	innerCreatedTableXi.innerHTML = Xi;

	calcPiTd();
	
	
}

function calcPiTd () {
	var tmp = 0;
	var tmpVal = 0;

	countColumns = +inputCountColumns.value;
	countRows = +inputCountRows.value;
	
	
	for (var z = 0; z < countColumns; z++ ) {

		for (var i = 0; i < countRows; i++) {
			
			tmp =  z + i * countColumns;
			tmpVal +=  +ceilsV[tmp].value;

			
		}
		Pi += "<td class ='Pi'>";
		Pi += tmpVal;
		Pi += "</td>";

		tmp = 0;
		tmpVal = 0;		
	}
	Pi += "</tr>";
	innerCreatedTableXi.innerHTML += Pi;
}