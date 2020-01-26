package com.martinsanguin.inventarios.dao;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author martinsanguin
 *	This class can be used in other Daos and it's useful to centralized CRUD operation to the database using Hibernate.	
 *
 * @param <T> Persistent class used in your Dao.
 */
@Repository
@SuppressWarnings("deprecation")
public class GenericHibernateDao<T>  {
	
	private SessionFactory sessionFactory;
	
	@Autowired
	public GenericHibernateDao(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
	}
	
	public String getLikeCharacter() {
		return "%";
	}
	
	public Session getSession(){
		return this.sessionFactory.getCurrentSession();
	}
	
	public void save(T entity) {
		this.getSession().save(entity);
	}
	
	public void merge(T entity) {
		this.getSession().merge(entity);
	}
	
	public void delete(T entity){
		this.getSession().delete(entity);
	}
	
	
	public T findById(Object id,Class<T> clazz) {
		Criteria criteria = this.getSession().createCriteria(clazz);
		criteria.add(Restrictions.eq("id", id));
		return (T) criteria.uniqueResult();
	}
	
	public List<T> findAll(Class<T> clazz){
		Criteria criteria = this.getSession().createCriteria(clazz);
		return criteria.list();
	}
	
	public List<T> findByCriteria(List<Criterion> Criterions,Class<T> clazz){
		Criteria criteria = this.getSession().createCriteria(clazz);
		for (Criterion criterion : Criterions) {
			criteria.add(criterion);
		}
		return criteria.list();
	}
	
	
}
