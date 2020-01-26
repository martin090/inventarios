package com.martinsanguin.inventarios.dao;

import java.util.List;

import com.martinsanguin.inventarios.be.Product;

public interface ProductDao {
	Product findById(Integer id);
	List<Product> findAll();
	List<Product> findByFilters(String[] filters);
	void save(Product product);
	void merge(Product product);
	
}
