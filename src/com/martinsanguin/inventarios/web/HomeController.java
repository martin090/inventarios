package com.martinsanguin.inventarios.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.martinsanguin.inventarios.service.ProductService;

@Controller
public class HomeController {
	
	@Autowired
	ProductService productService;
	
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String home(){
		return "home";
	}
}
