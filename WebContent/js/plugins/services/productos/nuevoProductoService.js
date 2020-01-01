function NuevoProductoService(){	
};

NuevoProductoService.prototype.createProduct = function(data,callback){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/inventarios/Products/create/",
		data: JSON.stringify(data),
		contentType: "application/json",
		success: function(data){
			callback(data);
		},
		error: function(){
			alert("Ocurrió un error al intentar guardar el producto.");
		}
	});
};