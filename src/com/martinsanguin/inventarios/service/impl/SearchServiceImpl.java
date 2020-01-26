package com.martinsanguin.inventarios.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.martinsanguin.inventarios.be.Product;
import com.martinsanguin.inventarios.dao.ProductDao;
import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.SearchFilterDTO;
import com.martinsanguin.inventarios.service.SearchService;

@Service
@Transactional(readOnly = true)
public class SearchServiceImpl implements SearchService {
	
	@Autowired
	ProductDao productDao;

	@Override
	public List<ProductDTO> seekForProducts(SearchFilterDTO filter) {
		List<ProductDTO> results = new ArrayList<ProductDTO>();
		if(filter.getFilter() != null && !filter.getFilter().trim().isEmpty()) {
			String[] keyWords = filter.getFilter().split(" ");
			List<Product> products = this.productDao.findByFilters(keyWords);
			for (Product product : products) {
				results.add(product.convertMeToDto());
			}
		}
		return results;
	}

}
