//Royale With Cheese
//Final Project
//JavaScript code for contact.html
		

function btnSubmit(){
	var name = document.getElementById("name").value;
	var sel = document.getElementById("selection").value;
	
	var note = 'Thanks '+ name +'! Thanks for choosing ' + sel +'!';
	
	document.getElementById("demo").innerHTML = note;
}

function lucasFunction(){
	var checkBox = document.getElementById("lucasCheck");
	var text = document.getElementById("lucasNote");
	if (checkBox.checked == true){
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}


function shaniaFunction(){
	var checkBox = document.getElementById("shaniaCheck");
	var text = document.getElementById("shaniaNote");
	if (checkBox.checked == true){
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}