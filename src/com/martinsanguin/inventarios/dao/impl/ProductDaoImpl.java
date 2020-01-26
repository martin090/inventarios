package com.martinsanguin.inventarios.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
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
	
	@Override
	public List<Product> findByFilters(String[] filters){
		List<Criterion> criterions = new ArrayList<Criterion>();
		for (String filter : filters) {
			criterions.add(Restrictions.or(
					Restrictions.like("title", daoService.getLikeCharacter()+filter+daoService.getLikeCharacter()),
					Restrictions.like("details", daoService.getLikeCharacter()+filter+daoService.getLikeCharacter())
				));
			//criterions.add(Restrictions.like("brand.description", daoService.getLikeCharacter()+filter+daoService.getLikeCharacter()));
			//criterions.add(Restrictions.like("producttype.description", daoService.getLikeCharacter()+filter+daoService.getLikeCharacter()));
		}
		return this.daoService.findByCriteria(criterions, Product.class);
	}

}
