package com.skilldistillery.mountains.entities;

import javax.persistence.Entity;

@Entity
public class State {
	
	private int ID;
	
	private String abbr;
	
	private String name;

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getAbbr() {
		return abbr;
	}

	public void setAbbr(String abbr) {
		this.abbr = abbr;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
