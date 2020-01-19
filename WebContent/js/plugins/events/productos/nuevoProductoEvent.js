function NuevoProductoEvent(div,callback,idToModified){
	this.div = div;
	this.callback = callback;
	this.pathHtml = "html/productos/nuevoProducto.html";
	this.idToModified = idToModified;
	this.service = new NuevoProductoService();
}

NuevoProductoEvent.prototype.draw = function(){
	$("#formContainer").load(this.pathHtml,$.proxy(this.renderView,this));
};

NuevoProductoEvent.prototype.renderView = function(comp){
	CHANGEVIEW.toggleViewForm("#formContainer");
	$("#formContainer").html(comp.replace(/{{id}}/g,this.div));
	
	if(this.idToModified != 0 && this.idToModified)
		var product = this.service.getProductById(this.idToModified,$.proxy(this.completeForm,this));
	
	this.initButtons();
};

NuevoProductoEvent.prototype.completeForm = function(productData){
	GETOBJETC.getJqObjectById(this.div,"titleForm").text("Visualizando producto");
	
	GETOBJETC.getJqObjectById(this.div,"title").val(productData.title);
	GETOBJETC.getJqObjectById(this.div,"details").val(productData.details);
	GETOBJETC.getJqObjectById(this.div,"quantity").val(productData.quantity);
	GETOBJETC.getJqObjectById(this.div,"productType").val(productData.productType);
	GETOBJETC.getJqObjectById(this.div,"brand").val(productData.brand);
	GETOBJETC.getJqObjectById(this.div,"forVegan").attr("checked",productData.for_vegan);
	GETOBJETC.getJqObjectById(this.div,"forCeliac").attr("checked",productData.for_celiac);
	GETOBJETC.getJqObjectById(this.div,"forDietetic").attr("checked",productData.for_dietetic);
	GETOBJETC.getJqObjectById(this.div,"forVegetarian").attr("checked",productData.for_vegetarian);
};

NuevoProductoEvent.prototype.initButtons = function(){
	GETOBJETC.getJqObjectById(this.div,"btnSubmit").button().click($.proxy(this.createProduct,this));		
	GETOBJETC.getJqObjectById(this.div,"btnCancel").button().click($.proxy(this.closePage,this));
};

NuevoProductoEvent.prototype.createProduct = function(){
	var product = {
		id: (this.idToModified != 0 && this.idToModified ? this.idToModified : null),
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
	
	if(this.idToModified != 0 && this.idToModified)
		this.service.updateProduct(product,$.proxy(this.closePage,this));
	else
		this.service.createProduct(product,$.proxy(this.closePage,this));
};

NuevoProductoEvent.prototype.closePage = function(){
	this.callback();
	CHANGEVIEW.toggleViewForm("#viewContainer");

};

NuevoProductoEvent.init = function(callback,productIdToModify){
	var nuevoProductoEvent = new NuevoProductoEvent("nuevoProducto",callback,productIdToModify);
	nuevoProductoEvent.draw();
}