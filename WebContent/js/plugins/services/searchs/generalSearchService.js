function GeneralSearchService(){
}

GeneralSearchService.prototype.search = function(data,callback){
	$.ajax({
		type: "POST",
		data: JSON.stringify(data),
		contentType: "application/json",
		url: "http://localhost:8080/inventarios/Search/",
		success: function(data){
			callback(data);
		},
		error: function(){
			alert("Ocurrió un error al intentar realizar la búsqueda");
		}
	});
};