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
		
		PRODUCTLISTMANAGER.renderProductList(
				GETOBJETC.getJqObjectById(self.div,"listadoProductos"),
				data,
				GeneralSearchEvent.openWatchProduct
		);
	});	
};

GeneralSearchEvent.openWatchProduct = function(id){
	NuevoProductoEvent.init(GeneralSearchEvent.executeSearch,id);
};