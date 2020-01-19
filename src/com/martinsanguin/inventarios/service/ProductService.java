package com.martinsanguin.inventarios.service;

import java.util.List;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.ResponseDTO;

public interface ProductService {
	ResponseDTO saveProduct(ProductDTO dto);
	ResponseDTO updateProduct(ProductDTO dto);
	List<ProductDTO> getAllProducts();
	ProductDTO getProductById(Integer id);
}
