function GeneralSearchEvent(){
}

GeneralSearchEvent.executeSearch = function(){
	var service = new GeneralSearchService();
	
	var searchFilter = {
		filter: GETOBJETC.getJqObjectById(null,"inputSearch").val()
	};
	service.search(searchFilter,$.proxy(GeneralSearchEvent.processSearch,this));
};

GeneralSearchEvent.processSearch = function(data){	
	var self = this;
	self.div = "generalSearch";
	$("#viewContainer").load("html/searchs/searchResults.html",function(comp){
		
		CHANGEVIEW.toggleViewForm("#viewContainer");
		$("#viewContainer").html(comp.replace(/{{id}}/g,self.div));
				
		GETOBJETC.getJqObjectById(self.div,"listadoProductos").html("");
		if(data.length == 0){
			MESSAGE.alert("Las búsqueda no retornó resultados!");
		}else{
			for ( var clave in data) {
				GETOBJETC.getJqObjectById(self.div,"listadoProductos").append(`
						<div id="`+ self.div + "-watchProductClick-" + data[clave].id + `" class="card handPointer">
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
						//						    	(data[clave].for_vegan ? "<li>" + "Vegan: " + this.formatIconOptionsYesNo(data[clave].for_vegan) + "</li>" : "") +
						//						    	(data[clave].for_celiac ? "<li>" + "Celiac: " + this.formatIconOptionsYesNo(data[clave].for_celiac) + "</li>" : "") +
						//						    	(data[clave].for_dietetic ? "<li>" + "Diatetic: " + this.formatIconOptionsYesNo(data[clave].for_dietetic) + "</li>" : "") +
						//						    	(data[clave].for_vegetarian ? "<li>" + "Vegetarian: " + this.formatIconOptionsYesNo(data[clave].for_vegetarian) + "</li>" : "") +
						"</ul>" +
						`</p>
						</div>
						</div>
						</div>
				`);
				GETOBJETC.getJqObjectById(self.div,"watchProductClick-"+data[clave].id).click($.proxy(self.openWatchProduct,self,data[clave].id));
				GETOBJETC.getJqObjectById(self.div,"watchProductClick-"+data[clave].id).mouseover(			
						function standOutDiv(){
							$(this).css("background-color", "#f9faaf");
						}
				);
				GETOBJETC.getJqObjectById(this.div,"watchProductClick-"+data[clave].id).mouseleave(			
						function standOutDiv(){
							$(this).css("background-color", "#FFFFFF");
						}
				);
			}
		}
	});	
	
	
};