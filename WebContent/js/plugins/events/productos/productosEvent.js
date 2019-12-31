function ProductosEvent(div){
	this.div = div;
	this.pathHtml = "html/productos/verProductos.html";
	this.service = new ProductosService();
}

ProductosEvent.prototype.draw = function(){
	$("#viewContainer").load(this.pathHtml,$.proxy(this.renderView,this));	
}

ProductosEvent.prototype.renderView = function(comp){
	CHANGEVIEW.toggleViewForm("#viewContainer");
	$("#viewContainer").html(comp.replace(/{{id}}/g,this.div));
	
	this.service.getProductos($.proxy(this.completePage,this));
	
	this.initButtons();
}

ProductosEvent.prototype.completePage = function(data){
	for ( var clave in data) {
		GETOBJETC.getJqObjectById(this.div,"listadoProductos").append(`
				<div class="card">
				  <div class="card-header">` +
				    data[clave].details +
				  `</div>
				  <div class="card-body">
				    <h5 class="card-title">Special title treatment</h5>
				    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
				    <a href="#" class="btn btn-primary">Go somewhere</a>
				  </div>
				</div>
		`);
	}
};

ProductosEvent.prototype.initButtons = function(){
	GETOBJETC.getJqObjectById(this.div,"createProductForm").button().click($.proxy(this.openNewProductForm,this));
};

ProductosEvent.prototype.openNewProductForm = function(){
	NuevoProductoEvent.init();
}

ProductosEvent.init = function(){
	var productosEvent = new ProductosEvent("productosEvent");
	productosEvent.draw();
}