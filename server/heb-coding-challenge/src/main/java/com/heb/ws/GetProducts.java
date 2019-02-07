package com.heb.ws;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.heb.products.Product;

@RestController
public class GetProducts {

	@RequestMapping("/products")
	public List<Product> getProducts(){
		return null;
		
	}
}
