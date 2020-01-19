package com.martinsanguin.inventarios.dao.impl;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.martinsanguin.inventarios.be.Product;
import com.martinsanguin.inventarios.dao.GenericHibernateDao;
import com.martinsanguin.inventarios.dao.ProductDao;

@Repository
@Transactional(readOnly = true)
public class ProductDaoImpl implements ProductDao {

	@Autowired
	GenericHibernateDao<Product> daoService;
	
	@Transactional(readOnly = false)
	@Override
	public void save(Product product) {
		this.daoService.save(product);
	}

	@Transactional(readOnly = false)
	@Override
	public void merge(Product product) {
		this.daoService.merge(product);
	}

	@Override
	public List<Product> findAll() {
		return this.daoService.findAll(Product.class);
	}
	
	@Override
	public Product findById(Integer id) {
		return this.daoService.findById(id,Product.class);
	}

}
