package com.skilldistillery.mountains.entities;

import javax.persistence.Entity;

@Entity
public class UserInfo {
	
	//Field
	
	private int ID;
	
	private String email;
	
	private String description;
	
	private String imageUrl;
	
	
	//Constructor
	
	
	//Method
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
	
	
	
	

}
