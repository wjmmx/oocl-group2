package com.oocl.kb.model;

public class User {
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private String role;
	private int isPremium;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public int getIsPremium() {
		return isPremium;
	}
	public void setIsPremium(int isPremium) {
		this.isPremium = isPremium;
	}
	
	
}
