BACKBTN.addEventListener("click", goBack);
FORWARDBTN.addEventListener("click", goForward);
REFRESHBTN.addEventListener("click", refreshPage);

function goBack(){

};

function goForward(){
	
};

function refreshPage(){
	
};

URLINPUT.form.addEventListener("submit", loadPage);

function loadPage(e){
	e.preventDefault();
	url = URLINPUT.value;
};
