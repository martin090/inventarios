package com.martinsanguin.inventarios.dao;

import com.martinsanguin.inventarios.be.Product;

public interface ProductDao {
	Product findById(Integer id);
	void save(Product product);
	void merge(Product product);
}
