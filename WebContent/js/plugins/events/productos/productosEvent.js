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
	PRODUCTLISTMANAGER.renderProductList(
		GETOBJETC.getJqObjectById(this.div,"listadoProductos"),
		data,
		$.proxy(this.openWatchProduct,this)
	);
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