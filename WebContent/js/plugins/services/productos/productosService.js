function ProductosService(){
	
}

ProductosService.prototype.getProductos = function(callback){
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/inventarios/Products/",
		success: function(data){
			callback(data);
		},
		error: function(){
			alert("Ocurrió un error al intentar obtener los productos.");
		}
	});
};