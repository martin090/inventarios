function NuevoProductoService(){	
};

NuevoProductoService.prototype.createProduct = function(data,callback){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/inventarios/Products/create/",
		data: JSON.stringify(data),
		contentType: "application/json",
		success: function(response){
			MESSAGE.showResponseMessage(response);
			if(response.level === "OK")
				callback();
		},
		error: function(){
			alert("Ocurrió un error al intentar guardar el producto.");
		}
	});
};

NuevoProductoService.prototype.updateProduct = function(product,callback){
	$.ajax({
		type: "POST",
		url: "http://localhost:8080/inventarios/Products/update/"+product.id,
		data: JSON.stringify(product),
		contentType: "application/json",
		success: function(response){
			MESSAGE.showResponseMessage(response);
			if(response.level === "OK")
				callback();
		},
		error: function(){
			alert("Ocurrió un error al intentar guardar el producto.");
		}
	});
};

NuevoProductoService.prototype.getProductById = function(id,callback){
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/inventarios/Products/"+id,
		success: function(response){
			if(response.message.level === "OK")
				callback(response);
		},
		error: function(){
			alert("Ocurrió un error al intentar obtener el producto.");
		}
	});
};