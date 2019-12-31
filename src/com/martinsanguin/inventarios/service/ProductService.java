package com.martinsanguin.inventarios.service;

import java.util.List;

import com.martinsanguin.inventarios.dto.ProductDTO;

public interface ProductService {
	void saveProduct();
	List<ProductDTO> getAllProducts();
}
