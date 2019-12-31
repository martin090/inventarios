function CHANGEVIEW(){
};

CHANGEVIEW.toggleViewForm = function(containerToShow){
	// Switchea entre vista y formulario:
	var contToShow = $(containerToShow);
	var otherCont = undefined;
	
	if (containerToShow == "#viewContainer")
		otherCont = $("#formContainer");
	else
		otherCont = $("#viewContainer");
	
	contToShow.show();
	otherCont.hide();
}

function GETOBJETC(){	
};

GETOBJETC.getJqObjectById = function(div,id){
	return $("#" + div + "-" + id);
};
