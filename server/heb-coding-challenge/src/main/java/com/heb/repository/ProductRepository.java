package com.heb.repository;

import java.math.BigInteger;

import org.springframework.data.repository.CrudRepository;

import com.heb.products.Product;

public interface ProductRepository extends CrudRepository<Product, BigInteger> {

}
