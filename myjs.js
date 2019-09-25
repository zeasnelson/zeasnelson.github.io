


let colors = ['red', 'yellow'];
let colorUsed = 0;

function createGrid(){

	let box = document.getElementById('box');

	for( i = 0; i < 6; i++){
		let row = document.createElement('div');
		row.setAttribute('onClick', 'changeColor('+i+')');
		row.className = 'row'+i;
		row.onClick = function(){ };
		for( j = 0; j < 6; j++){
			let col = document.createElement('div');
			col.className = 'col' + ' col'+j;
			col.style.background = colors[colorUsed];
			let text = document.createTextNode(i  + ',' + j);
			col.appendChild(text);
			row.appendChild(col);

			if( colorUsed == 0 )
				colorUsed = 1;
			else colorUsed = 0;
		}
		box.appendChild(row);
		if( colorUsed == 0 )
				colorUsed = 1;
			else colorUsed = 0;
	}



}

	

function changeColor(row) {
	let parentDiv = document.querySelectorAll('.row' + row + ' > *' );
	let arr = Array.from(parentDiv);
	// console.log(arr[0]);

	for(i = 0; i < arr.length; i++){
		if( arr[i].style.background == 'red')
			colorUsed = 1;
		else
			colorUsed = 0;

		arr[i].style.background = colors[colorUsed];
	}
		
}















