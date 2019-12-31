function NuevoProductoEvent(div){
	this.div = div;
	this.pathHtml = "html/productos/nuevoProducto.html"
}

NuevoProductoEvent.prototype.draw = function(){
	$("#formContainer").load(this.pathHtml,$.proxy(this.renderView,this));
};

NuevoProductoEvent.prototype.renderView = function(comp){
	CHANGEVIEW.toggleViewForm("#formContainer");
	$("#formContainer").html(comp.replace(/{{id}}/g,this.div));
	
	this.initButtons();
};

NuevoProductoEvent.prototype.initButtons = function(){
	GETOBJETC.getJqObjectById(this.div,"btnCancel").button().click($.proxy(this.closePage,this));
};

NuevoProductoEvent.prototype.closePage = function(){
	CHANGEVIEW.toggleViewForm("#viewContainer");
};

NuevoProductoEvent.init = function(){
	var nuevoProductoEvent = new NuevoProductoEvent("nuevoProducto");
	nuevoProductoEvent.draw();
}