package com.skilldistillery.mountains.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mountain {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private double longitude;

	private double latitude;

	private int height;

	public Mountain() {
		super();
	}

	public Mountain(int id, String name, double longitude, double latitude, int height, int stateId,
			int mountainClassId) {
		super();
		this.id = id;
		this.name = name;
		this.longitude = longitude;
		this.latitude = latitude;
		this.height = height;
		this.stateId = stateId;
		this.mountainClassId = mountainClassId;
	}

	@Column(name = "state_id")
	private int stateId;

	@Column(name = "mountain_class_id")
	private int mountainClassId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getStateId() {
		return stateId;
	}

	public void setStateId(int stateId) {
		this.stateId = stateId;
	}

	public int getMountainClassId() {
		return mountainClassId;
	}

	public void setMountainClassId(int mountainClassId) {
		this.mountainClassId = mountainClassId;
	}

	@Override
	public String toString() {
		return "Mountain [id=" + id + ", name=" + name + ", longitude=" + longitude + ", latitude=" + latitude
				+ ", height=" + height + ", stateId=" + stateId + ", mountainClassId=" + mountainClassId + "]";
	}

}
