function clearCreatedTableY() {
	innerCreatedTableYk.innerHTML = "";
	Yk = "<tr><td>Yk</td>";
	Pk = "<tr><td>Pk</td>";

}

function createTableY() {
	
	
	clearCreatedTableY();

	createdTableYk.style.display = "table";
	var tmp;

	
	for (let i = 0; i < ceilsY.length; i++) {
		tmp = ceilsY[i].value;


		Yk += "<td class ='ceilY2'>";
		Yk += tmp;
		Yk += "</td>";
	}
	Yk += "</tr>";
	innerCreatedTableYk.innerHTML = Yk;

	calcPkTd();
	
	
}

function calcPkTd () {
	var tmp = 0;
	var tmpVal = 0;

	countColumns = +inputCountColumns.value;
	countRows = +inputCountRows.value;
	
	for (var z = 0; z < countRows; z++ ) {

		for (var i = 0; i < countColumns; i++) {
			tmp = i + z * countColumns;
			tmpVal +=  +ceilsV[tmp].value;

			
		}
		Pk += "<td class ='Pk'>";
		Pk += tmpVal;
		Pk += "</td>";

		tmp = 0;
		tmpVal = 0;		
	}
	Pk += "</tr>";
	innerCreatedTableYk.innerHTML += Pk;
}