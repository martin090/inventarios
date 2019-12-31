package com.martinsanguin.inventarios.dto;

public class ProductDTO {
	private Integer id;
	private String title;
	private String details;
	private Boolean for_vegan;
	private Boolean for_celiac;
	private Boolean for_dietetic;
	private Boolean for_vegetarian;
	private Integer quantity;
	private Integer idBrand;
	private Integer idProductType;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public Boolean getFor_vegan() {
		return for_vegan;
	}
	public void setFor_vegan(Boolean for_vegan) {
		this.for_vegan = for_vegan;
	}
	public Boolean getFor_celiac() {
		return for_celiac;
	}
	public void setFor_celiac(Boolean for_celiac) {
		this.for_celiac = for_celiac;
	}
	public Boolean getFor_dietetic() {
		return for_dietetic;
	}
	public void setFor_dietetic(Boolean for_dietetic) {
		this.for_dietetic = for_dietetic;
	}
	public Boolean getFor_vegetarian() {
		return for_vegetarian;
	}
	public void setFor_vegetarian(Boolean for_vegetarian) {
		this.for_vegetarian = for_vegetarian;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Integer getIdBrand() {
		return idBrand;
	}
	public void setIdBrand(Integer idBrand) {
		this.idBrand = idBrand;
	}
	public Integer getIdProductType() {
		return idProductType;
	}
	public void setIdProductType(Integer idProductType) {
		this.idProductType = idProductType;
	}
	
	
}
