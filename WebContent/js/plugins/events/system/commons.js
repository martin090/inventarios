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

function PRODUCTLISTMANAGER(){
	
}

PRODUCTLISTMANAGER.renderProductList = function(comp,data,clickeableCallback){
	if(!comp)
		return;
	
	comp.html("");
	for ( var clave in data) {
		comp.append(`
				<div id="renderProductList-watchProductClick-` + data[clave].id + `" class="card handPointer">
				<div class="card-header handPointer"> <h5>` +
				`<div class="d-flex flex-row">
				<div class="p-2">`
				+ data[clave].title +
				`</div>
				<div class="ml-auto p-2">`
				+ "Cantidad: " + data[clave].quantity +
				`</div>`
				+
				`</h5></div>
				<div class="card-body">
				<div class="d-flex flex-row">
				<div class="p-2">
				<div class="card-title"> ` + data[clave].details  + `</div>
				</div>
				<div class="ml-auto p-2">
				<p class="card-text"> ` + 
				"<ul id='options'>" +
			    	(data[clave].for_vegan ? "<li>" + "Vegan: " + PRODUCTLISTMANAGER.formatIconOptionYes(data[clave].for_vegan) + "</li>" : "") +
			    	(data[clave].for_celiac ? "<li>" + "Celiac: " + PRODUCTLISTMANAGER.formatIconOptionYes(data[clave].for_celiac) + "</li>" : "") +
			    	(data[clave].for_dietetic ? "<li>" + "Diatetic: " + PRODUCTLISTMANAGER.formatIconOptionYes(data[clave].for_dietetic) + "</li>" : "") +
			    	(data[clave].for_vegetarian ? "<li>" + "Vegetarian: " + PRODUCTLISTMANAGER.formatIconOptionYes(data[clave].for_vegetarian) + "</li>" : "") +
				"</ul>" +
				`</p>
				</div>
				</div>
				</div>
		`);
		GETOBJETC.getJqObjectById(null,"renderProductList-watchProductClick-"+data[clave].id).click($.proxy(clickeableCallback,self,data[clave].id));
		GETOBJETC.getJqObjectById(null,"renderProductList-watchProductClick-"+data[clave].id).mouseover(			
				function standOutDiv(){
					$(this).css("background-color", "#f9faaf");
				}
		);
		GETOBJETC.getJqObjectById(null,"renderProductList-watchProductClick-"+data[clave].id).mouseleave(			
				function standOutDiv(){
					$(this).css("background-color", "#FFFFFF");
				}
		);
	}
	
};

PRODUCTLISTMANAGER.formatIconOptionYes = function(value){
	if(value)
		return "<i class='material-icons'>check</i>";
};