package com.martinsanguin.inventarios.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.martinsanguin.inventarios.be.Product;
import com.martinsanguin.inventarios.dao.ProductDao;
import com.martinsanguin.inventarios.service.ProductService;

@Service
@Transactional(readOnly = true)
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDao productDao;
	
	@Transactional(readOnly = false)
	@Override
	public void saveNewProduct() {
		Product p = new Product();
		p.setDetails("Hola");
		productDao.save(p);
	}

}
