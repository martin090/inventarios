function ProductosEvent(div){
	this.div = div;
	this.pathHtml = "html/productos/verProductos.html";
	this.service = new ProductosService();
}

ProductosEvent.prototype.draw = function(){
	$("#viewContainer").load(this.pathHtml,$.proxy(this.renderView,this));	
};

ProductosEvent.prototype.renderView = function(comp){
	CHANGEVIEW.toggleViewForm("#viewContainer");
	$("#viewContainer").html(comp.replace(/{{id}}/g,this.div));
	
	this.getProducts();
	
	this.initButtons();
};

ProductosEvent.prototype.completePage = function(data){
	GETOBJETC.getJqObjectById(this.div,"listadoProductos").html("");
	for ( var clave in data) {
		GETOBJETC.getJqObjectById(this.div,"listadoProductos").append(`
				<div id="`+ this.div + "-watchProductClick-" + data[clave].id + `" class="card handPointer">
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
						    	(data[clave].for_vegan ? "<li>" + "Vegan: " + this.formatIconOptionYes(data[clave].for_vegan) + "</li>" : "") +
						    	(data[clave].for_celiac ? "<li>" + "Celiac: " + this.formatIconOptionYes(data[clave].for_celiac) + "</li>" : "") +
						    	(data[clave].for_dietetic ? "<li>" + "Diatetic: " + this.formatIconOptionYes(data[clave].for_dietetic) + "</li>" : "") +
						    	(data[clave].for_vegetarian ? "<li>" + "Vegetarian: " + this.formatIconOptionYes(data[clave].for_vegetarian) + "</li>" : "") +
						    	"</ul>" +
						    `</p>
						</div>
				  </div>
				</div>
		`);
		GETOBJETC.getJqObjectById(this.div,"watchProductClick-"+data[clave].id).click($.proxy(this.openWatchProduct,this,data[clave].id));
		GETOBJETC.getJqObjectById(this.div,"watchProductClick-"+data[clave].id).mouseover(			
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
};

ProductosEvent.prototype.formatIconOptionYes = function(value){
	if(value)
		return "<i class='material-icons'>check</i>";
};

ProductosEvent.prototype.initButtons = function(){
	GETOBJETC.getJqObjectById(this.div,"createProductForm").button().click($.proxy(this.openNewProductForm,this));
};

ProductosEvent.prototype.getProducts = function(){
	this.service.getProductos($.proxy(this.completePage,this));
};

ProductosEvent.prototype.openNewProductForm = function(){
	NuevoProductoEvent.init($.proxy(this.getProducts,this));
};

ProductosEvent.prototype.openWatchProduct = function(id){
	NuevoProductoEvent.init($.proxy(this.getProducts,this),id);
};

ProductosEvent.init = function(){
	var productosEvent = new ProductosEvent("productosEvent");
	productosEvent.draw();
};