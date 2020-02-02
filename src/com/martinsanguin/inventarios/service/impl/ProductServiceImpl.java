package com.martinsanguin.inventarios.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.martinsanguin.inventarios.be.Brand;
import com.martinsanguin.inventarios.be.Product;
import com.martinsanguin.inventarios.be.ProductType;
import com.martinsanguin.inventarios.dao.ProductDao;
import com.martinsanguin.inventarios.dto.EnumResponseDTOLevel;
import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.ResponseDTO;
import com.martinsanguin.inventarios.service.ProductService;

@Service
@Transactional(readOnly = true)
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;
	
	@Transactional(readOnly = false)
	@Override
	public ResponseDTO saveProduct(ProductDTO dto) {
		ResponseDTO response = new ResponseDTO();
		
		if(dto.getTitle() == null || dto.getTitle().trim().equals(""))
			response.getMessages().add("Title can not be empty.");
		if(dto.getDetails() == null || dto.getDetails().trim().equals(""))
			response.getMessages().add("Details can not be empty.");
		if(dto.getQuantity() == null)
			response.getMessages().add("You must indicate the quantity");
		if(dto.getIdBrand() == null)
			response.getMessages().add("You must indicate the brand");
		if(dto.getIdProductType() == null)
			response.getMessages().add("You must indicate the product type");
		
		if(response.getMessages().size() != 0)
			return response;
		else {
			Product product = new Product();
			product.setTitle(dto.getTitle());
			product.setDetails(dto.getDetails());
			product.setQuantity(dto.getQuantity());
			
			Brand brand = new Brand();
			brand.setId(dto.getIdBrand());
			product.setBrand(brand);
			
			ProductType productType = new ProductType();
			productType.setId(dto.getIdProductType());
			product.setProductType(productType);
			
			product.setFor_celiac(dto.getFor_celiac());
			product.setFor_dietetic(dto.getFor_dietetic());
			product.setFor_vegan(dto.getFor_vegan());
			product.setFor_vegetarian(dto.getFor_vegetarian());
			
			this.productDao.save(product);
			
			response.setLevel(EnumResponseDTOLevel.OK);
			response.setTitle("Success");
			response.getMessages().add("Product saved.");
			
			return response;
		}
	}

	@Override
	public List<ProductDTO> getAllProducts() {
		List<ProductDTO> dtos = new ArrayList<ProductDTO>();
		for (Product product : this.productDao.findAll()) {
			dtos.add(product.convertMeToDto());
		}
		return dtos;
	}

	@Transactional(readOnly = false)
	@Override
	public ResponseDTO updateProduct(ProductDTO dto) {
		ResponseDTO response = new ResponseDTO();
		
		if(dto.getTitle() == null || dto.getTitle().trim().equals(""))
			response.getMessages().add("Title can not be empty.");
		if(dto.getDetails() == null || dto.getDetails().trim().equals(""))
			response.getMessages().add("Details can not be empty.");
		if(dto.getQuantity() == null)
			response.getMessages().add("You must indicate the quantity");
		if(dto.getIdBrand() == null)
			response.getMessages().add("You must indicate the brand");
		if(dto.getIdProductType() == null)
			response.getMessages().add("You must indicate the product type");
		
		if(response.getMessages().size() != 0)
			return response;
		else {
			Product product = this.productDao.findById(dto.getId());
			product.setTitle(dto.getTitle());
			product.setDetails(dto.getDetails());
			product.setQuantity(dto.getQuantity());
			
			Brand brand = new Brand();
			brand.setId(dto.getIdBrand());
			product.setBrand(brand);
			
			ProductType productType = new ProductType();
			productType.setId(dto.getIdProductType());
			product.setProductType(productType);
			
			product.setFor_celiac(dto.getFor_celiac());
			product.setFor_dietetic(dto.getFor_dietetic());
			product.setFor_vegan(dto.getFor_vegan());
			product.setFor_vegetarian(dto.getFor_vegetarian());
			
			this.productDao.merge(product);
			
			response.setLevel(EnumResponseDTOLevel.OK);
			response.setTitle("Success");
			response.getMessages().add("Product updated.");
			
			return response;
		}
	}

	@Override
	public ProductDTO getProductById(Integer id) {
		ProductDTO dto = this.productDao.findById(id).convertMeToDto();
		dto.setMessage(new ResponseDTO(EnumResponseDTOLevel.OK));
		return dto;
	}

	@Transactional(readOnly = false)
	@Override
	public ResponseDTO disableProduct(Integer id) {
		ResponseDTO response = null;
		try {
			Product product = this.productDao.findById(id);
			product.setEnable(false);
			this.productDao.merge(product);
			response = new ResponseDTO("Producto inhbalitado",null,EnumResponseDTOLevel.OK);
			
		} catch (Exception e) {
			response = new ResponseDTO("Ocurrió un error",null,EnumResponseDTOLevel.ERROR);
		}
		
		return response;
	}



}
