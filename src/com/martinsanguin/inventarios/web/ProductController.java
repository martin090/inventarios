package com.martinsanguin.inventarios.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.martinsanguin.inventarios.dto.ProductDTO;
import com.martinsanguin.inventarios.dto.ResponseDTO;
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
	
	@RequestMapping(value="/create",method=RequestMethod.POST)
	public @ResponseBody ResponseDTO createProduct(@RequestBody ProductDTO product){
		return this.productService.saveProduct(product); //QUE PASA SI TENGO QUE DEVOLVER ERROR?  COMO LO HAGO?
	}
	
	@RequestMapping(value="/update/{id}",method=RequestMethod.POST)
	public @ResponseBody ResponseDTO updateProduct(@PathVariable Integer id, @RequestBody ProductDTO product){
		return this.productService.updateProduct(product);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public @ResponseBody ProductDTO findById(@PathVariable Integer id) {
		return this.productService.getProductById(id);
	};
}
