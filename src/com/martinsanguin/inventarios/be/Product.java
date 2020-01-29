package com.martinsanguin.inventarios.be;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.service.GenericDTOConverter;

@Entity
@Table(name="Product")
public class Product implements GenericDTOConverter<ProductDTO> {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	
	@Column(name="title", length=50, nullable = false)
	private String title;
	
	@Column(name="details", length=100)
	private String details;
	
	@Column(name="for_vegan")
	private Boolean for_vegan;
	
	@Column(name="for_celiac")
	private Boolean for_celiac;
	
	@Column(name="for_dietetic")
	private Boolean for_dietetic;
	
	@Column(name="for_vegetarian")
	private Boolean for_vegetarian;
	
	@Column(name="quantity", nullable = false)
	private Integer quantity;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idBrand")
	private Brand brand;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idProductType")
	private ProductType productType;
	
	@Column(name="enable", nullable = false)
	private Boolean enable;
	
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
	public Brand getBrand() {
		return brand;
	}
	public void setBrand(Brand brand) {
		this.brand = brand;
	}
	public ProductType getProductType() {
		return productType;
	}
	public void setProductType(ProductType productType) {
		this.productType = productType;
	}
	public Boolean getEnable() {
		return enable;
	}
	public void setEnable(Boolean enable) {
		this.enable = enable;
	}
	@Override
	public ProductDTO convertMeToDto() {
		ProductDTO dto = new ProductDTO();
		dto.setId(this.id);
		dto.setTitle(this.title);
		dto.setDetails(this.details);
		dto.setFor_celiac(this.for_celiac);
		dto.setFor_dietetic(this.for_dietetic);
		dto.setFor_vegan(this.for_vegan);
		dto.setFor_vegetarian(this.for_vegetarian);
		dto.setQuantity(this.quantity);
		dto.setEnable(this.enable);
		if(this.brand != null)
			dto.setIdBrand(this.brand.getId());
		if(this.productType != null)
			dto.setIdProductType(this.productType.getId());
		return dto;
	}
	
	
}
