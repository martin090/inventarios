package com.martinsanguin.inventarios.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.martinsanguin.inventarios.be.Product;
import com.martinsanguin.inventarios.dao.ProductDao;

@Repository
@Transactional(readOnly = true)
public class ProductDaoImpl implements ProductDao {

	@Autowired
	SessionFactory sessionFactory;
	
	@Override
	public Product findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Transactional(readOnly = false)
	@Override
	public void save(Product product) {
		Session s = sessionFactory.getCurrentSession();
		s.save(product);

	}

	@Override
	public void merge(Product product) {
		// TODO Auto-generated method stub

	}

}
