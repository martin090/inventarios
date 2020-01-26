package com.martinsanguin.inventarios.service;

import java.util.List;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.SearchFilterDTO;

public interface SearchService {
	List<ProductDTO> seekForProducts(SearchFilterDTO filter);
}
