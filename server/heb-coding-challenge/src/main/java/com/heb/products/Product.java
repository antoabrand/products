package com.heb.products;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {

	@Id
	private BigInteger id;

	private String description;
	private String lastSold;
	private String shelfLife;
	private String department;
	private double price;
	private String unit;
	private int xFor;
	private double cost;

	// private no arg constructor needed for JPA
	public Product() {

	}

	public Product(BigInteger id, String description, String lastSold, String shelfLife, String department, double price,
			String unit, int xFor, double cost) {
		this.id = id;
		this.description = description;
		this.lastSold = lastSold;
		this.shelfLife = shelfLife;
		this.department = department;
		this.price = price;
		this.unit = unit;
		this.xFor = xFor;
		this.cost = cost;
	}

	public double getCost() {
		return cost;
	}

	public String getDepartment() {
		return department;
	}

	public String getDescription() {
		return description;
	}

	public BigInteger getId() {
		return id;
	}

	public String getLastSold() {
		return lastSold;
	}

	public double getPrice() {
		return price;
	}

	public String getShelfLife() {
		return shelfLife;
	}

	public String getUnit() {
		return unit;
	}

	public int getxFor() {
		return xFor;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setId(BigInteger id) {
		this.id = id;
	}

	public void setLastSold(String lastSold) {
		this.lastSold = lastSold;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public void setShelfLife(String shelfLife) {
		this.shelfLife = shelfLife;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public void setxFor(int xFor) {
		this.xFor = xFor;
	}
}
