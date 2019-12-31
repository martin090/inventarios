package com.martinsanguin.inventarios.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.service.ProductService;

@Controller
@RequestMapping("/Products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value="/",method=RequestMethod.GET)
	public @ResponseBody List<ProductDTO> getAllProducts(){
		return this.productService.getAllProducts();
	}
}
