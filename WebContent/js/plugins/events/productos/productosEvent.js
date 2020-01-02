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
	
	this.getProducts();
	
	this.initButtons();
}

ProductosEvent.prototype.completePage = function(data){
	GETOBJETC.getJqObjectById(this.div,"listadoProductos").html("");
	for ( var clave in data) {
		GETOBJETC.getJqObjectById(this.div,"listadoProductos").append(`
				<div class="card">
				  <div class="card-header">` +
				    data[clave].title +
				  `</div>
				  <div class="card-body">
				    <h5 class="card-title"> ` + data[clave].details  + `</h5>
				    <p class="card-text"> `
				    	+ "Cantidad: " + data[clave].quantity +
				    	"<br>" +
				    	"<ul id='options'>" +
				    	"<li>" + "Vegan: " + this.formatIconOptionsYesNo(data[clave].for_vegan) + "</li>" +
				    	"<li>" + "Celiac: " + this.formatIconOptionsYesNo(data[clave].for_celiac) + "</li>" +
				    	"<li>" + "Diatetic: " + this.formatIconOptionsYesNo(data[clave].for_dietetic) + "</li>" +
				    	"<li>" + "Vegetarian: " + this.formatIconOptionsYesNo(data[clave].for_vegetarian) + "</li>" +
				    	"</ul>" +
				    ` </p>
				    <a href="#" class="btn btn-primary">See <i class="material-icons">remove_red_eye</i> </a>
				  </div>
				</div>
		`);
	}
};

ProductosEvent.prototype.formatIconOptionsYesNo = function(value){
	if(value){
		return "<i class='material-icons'>check</i>";
	}else{
		return "<i class='material-icons'>cancel</i>";
	}
};

ProductosEvent.prototype.initButtons = function(){
	GETOBJETC.getJqObjectById(this.div,"createProductForm").button().click($.proxy(this.openNewProductForm,this));
};

ProductosEvent.prototype.getProducts = function(){
	this.service.getProductos($.proxy(this.completePage,this));
}

ProductosEvent.prototype.openNewProductForm = function(){
	NuevoProductoEvent.init($.proxy(this.getProducts,this));
}

ProductosEvent.init = function(){
	var productosEvent = new ProductosEvent("productosEvent");
	productosEvent.draw();
}