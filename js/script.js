function init(){

document.getElementById("entrybutton").addEventListener("click", myFunction);

function myFunction(){
	
    var input = document.getElementById('entryinput').value
    
	document.getElementById('textoutput').innerHTML = input;
    alert('Roberto: ' + input);
}};

window.addEventListener('load', init);