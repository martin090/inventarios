function NuevoProductoEvent(div,callback){
	this.div = div;
	this.callback = callback;
	this.pathHtml = "html/productos/nuevoProducto.html";
	this.service = new NuevoProductoService();
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
	GETOBJETC.getJqObjectById(this.div,"btnSubmit").button().click($.proxy(this.createProduct,this));
	GETOBJETC.getJqObjectById(this.div,"btnCancel").button().click($.proxy(this.closePage,this));
};

NuevoProductoEvent.prototype.createProduct = function(){
	var newProduct = {
		title: GETOBJETC.getJqObjectById(this.div,"title").val(),
		details: GETOBJETC.getJqObjectById(this.div,"details").val(),
		quantity: GETOBJETC.getJqObjectById(this.div,"quantity").val(),
		idProductType: 1,
		idBrand: 1,
		for_vegan: GETOBJETC.getJqObjectById(this.div,"forVegan").prop('checked'),
		for_celiac: GETOBJETC.getJqObjectById(this.div,"forCeliac").prop('checked'),
		for_dietetic: GETOBJETC.getJqObjectById(this.div,"forDietetic").prop('checked'),
		for_vegetarian: GETOBJETC.getJqObjectById(this.div,"forVegetarian").prop('checked')
	};
	
	this.service.createProduct(newProduct,$.proxy(this.closePage,this));
};

NuevoProductoEvent.prototype.closePage = function(){
	this.callback();
	CHANGEVIEW.toggleViewForm("#viewContainer");

};

NuevoProductoEvent.init = function(callback){
	var nuevoProductoEvent = new NuevoProductoEvent("nuevoProducto",callback);
	nuevoProductoEvent.draw();
}