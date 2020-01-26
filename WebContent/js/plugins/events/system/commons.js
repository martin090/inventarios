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
	if(div)
		return $("#" + div + "-" + id);
	else
		return $("#" + id);
};

GETOBJETC.getJqObjectByClass = function(div,id){
	return $("." + div + "-" + id);
};

function MESSAGE(){
};

MESSAGE.showResponseMessage = function(response){
	if(response.level === 'OK')
		$('#alertDiv').addClass('alert-success');
	if(response.level === 'WARNING')
		$('#alertDiv').addClass('alert-warning');
	if(response.level === 'ERROR')
		$('#alertDiv').addClass('alert-danger');
		
	
	$('#alertTitle').text(response.title);
	
	var listaMensajes = "";
	for (var i = 0; i < response.messages.length; i++) {
		listaMensajes += response.messages[i] + "<br>";
	}
	
	$('#alertMessages').html(listaMensajes);
	
	$('#alertDiv').show();
	
	$('#alertDiv').alert();
	
	$('#alertDiv').on('closed.bs.alert', function () {
		  $('#wrapperAlertDiv').append(`
		  	<div id="alertDiv" class="alert alert-dismissible fade show" role="alert" style="display:none;">
			  <strong id="alertTitle"> </strong> <span id="alertMessages"> </span>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		  `);
	});
}

MESSAGE.ok = function(message){
	
};

MESSAGE.alert = function(message){
	$('#alertDiv').addClass('alert-warning');
	$('#alertTitle').text(message);
	
	$('#alertDiv').show();
	
	$('#alertDiv').alert();
	
	$('#alertDiv').on('closed.bs.alert', function () {
		  $('#wrapperAlertDiv').append(`
		  	<div id="alertDiv" class="alert alert-dismissible fade show" role="alert" style="display:none;">
			  <strong id="alertTitle"> </strong> <span id="alertMessages"> </span>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			    <span aria-hidden="true">&times;</span>
			  </button>
			</div>
		  `);
	});
	
};

MESSAGE.error = function(message){
	
}