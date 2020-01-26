package com.martinsanguin.inventarios.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.SearchFilterDTO;
import com.martinsanguin.inventarios.service.SearchService;

@Controller
@RequestMapping("/Search")
public class SearchController {
	
	@Autowired
	private SearchService searchService;
	
	@RequestMapping(value="/",method=RequestMethod.POST)
	public @ResponseBody List<ProductDTO> seekForProducts(@RequestBody SearchFilterDTO searchFilter){
		return this.searchService.seekForProducts(searchFilter);
	}
}
