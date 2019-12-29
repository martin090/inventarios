function ResumenEvent(div){
	this.div = div;
	this.pathHtml = "html/resumen/resumen.html";
}

ResumenEvent.prototype.draw = function(){
	//$.get(this.pathHtml,{},$.proxy(this.renderView,this));
    //$("#viewContainer").get(this.pathHtml,{},$.proxy(this.renderView,this));
	//$("#viewContainer").html(this.pathHtml);
	$("#viewContainer").load(this.pathHtml);
};

ResumenEvent.prototype.renderView = function(){
	
};

ResumenEvent.init = function(){
	var resumenEvent = new ResumenEvent("resumenEvent");
	resumenEvent.draw();
}